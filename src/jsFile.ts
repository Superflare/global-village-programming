// @ts-nocheck

// Nonrelated inclass currying demo

const pipe = (f, g) => (
    (...args) => g(f(...args))
)

const add = (someOtherNum) => (n) => n + someOtherNum;

// standard array-like
const someFunc = (a, b, c, d, e) => {};
// curried
const someCurryFunc = a => b => c => d => e => {};

const add1 = add(1);
const add2 = pipe(add1, add1);
const add3 = pipe(add2, add(1));

console.log(add2(10));



const filter = (f) => (arr) => arr.filter(f);
const map = (f) => (arr) => arr.map(f);

const isEven = n => n % 2 === 0;
const double = n => n * 2;

const doubledEvens = pipe(
    filter(isEven),
    map(double)
);
console.log(doubledEvens([1, 2, 3, 4, 5, 6]));


const flip = (f) => (
    a => b => f(b)(a)
)

const joinWith = sep => arr => arr.join(sep);
const prepend = first => last => first + last;
const append = flip(prepend);

const wrapInParens = pipe(
    prepend('('),
    append(')')
);

const hyphenJoin = joinWith('--');
const commaJoin = joinWith(',');
const spaceJoin = joinWith(' ');

console.log(hyphenJoin(['a','b','c']));
console.log(wrapInParens('RIT'));
