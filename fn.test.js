const fn = require('./fn');

test("name and age", () => {
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name: "Mike",
        age: 30,
    });
});

test("name and age", () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30,
    });
});