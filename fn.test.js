const { TestWatcher } = require('jest');
const fn = require('./fn');

// test("name and age", () => {
//     expect(fn.makeUser("Mike", 30)).toStrictEqual({
//         name: "Mike",
//         age: 30,
//     });
// });

// test("name and age", () => {
//     expect(fn.makeUser("Mike", 30)).toEqual({
//         name: "Mike",
//         age: 30,
//     });
// });

test("0 is false.", () => {
    expect(fn.add(1, -1)).toBeFalsy();
});

test("0 is false.", () => {
    expect(fn.add("Hello", "World!")).toBeTruthy();
});

