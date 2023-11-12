const greet = require('../greeting.js');

test("Test for the greet function: greets a person", () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test("Test for the greet function: handle null, undefined and empty values with a default value",() => {
    expect(greet(null)).toBe("Hello, my friend.");
    expect(greet(undefined)).toBe("Hello, my friend.");
    expect(greet("")).toBe("Hello, my friend.");
   

})

test("Test for the greet function: handle upper case", () => {
    expect(greet("JERRY")).toBe("HELLO, JERRY!");
})

test("Test for the greet function: handle array of 2 names", () => {
    expect(greet( ["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
})

test("Test for the greet function: handle array of 2 or more names", () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian and Charlotte.");
})
test("Test for the greet function: handle mixed upper case and lower case names ", () => {
    expect(greet( ["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN !");
    
})
