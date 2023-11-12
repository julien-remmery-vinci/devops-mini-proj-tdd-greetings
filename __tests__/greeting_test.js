const greet = require('../greeting.js');

test("Test for the greet function: greets a person", () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

