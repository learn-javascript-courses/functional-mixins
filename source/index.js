// (f . g)(x) = f(g(x))
// compose(...fns) => x => y
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

export const flying = o => {
  let isFlying = false;

  return Object.assign({}, o, {
    fly () {
      isFlying = true;
      return this;
    },
    isFlying: () => isFlying,
    land () {
      isFlying = false;
      return this;
    }
  });
};

export const quacking = quack => o => Object.assign({}, o, {
  quack: () => quack
});

export const createDuck = quack => pipe(
  flying,
  quacking(quack)
)({});
