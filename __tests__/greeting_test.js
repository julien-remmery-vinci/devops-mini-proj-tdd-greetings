const greet = require('../greeting.js');

test("Test for the greet function: greets a person", () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test("Test for the greet function: handle null, undefined and empty values with a default value",() => {
    expect(greet(null)).toBe("Hello, my friend.");
    expect(greet(undefined)).toBe("Hello, my friend.");
    expect(greet("")).toBe("Hello, my friend.");

})


