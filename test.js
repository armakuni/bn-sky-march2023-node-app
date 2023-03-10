const greeter = require("./view.js")
console.log(greeter);
test('should say hello world', () => {
    expect(greeter()).toBe("<html><body><h1>Hello, World!</h1></body></html>");
  });