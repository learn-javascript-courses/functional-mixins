import test from 'tape';

import { flying, createDuck } from './index';

// What is a functional mixin?
/*
flying(o) => m: o & {
  fly() => m,
  isFlying() => Boolean,
  land() => m
}
*/
test('flying.fly() and .isFlying()', assert => {
  const msg = 'should set isFlying() to true';
  const o = flying({});

  const actual = o.fly().isFlying();
  const expected = true;

  assert.same(actual, expected, msg);
  assert.end();
});

test('flying.land()', assert => {
  const msg = 'should set isFlying() to false';
  const o = flying({}).fly();
  assert.same(o.isFlying(), true, 'starts out flying');

  const actual = o.land().isFlying();
  const expected = false;

  assert.same(actual, expected, msg);
  assert.end();
});

test('flying() mixin', assert => {
  const msg = 'should mix into existing object';
  const startingObject = { a: 'a' };

  const actual = flying(startingObject).a;
  const expected = 'a';

  assert.same(actual, expected, msg);
  assert.end();
});

test('createDuck()', assert => {
  const msg = 'should have FLYING and quacking';
  const quack = 'QUACK!';
  const duck = createDuck(quack);

  const actual = duck.fly().quack();
  const expected = quack;

  assert.same(actual, expected, msg);
  assert.end();
});

// When should you use functional mixins?
// * state / data privacy
