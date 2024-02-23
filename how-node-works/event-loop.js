const fs = require("fs");

setTimeout(() => console.log("Time is set"), 0);
setImmediate(() => console.log("Done"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("Time1 is set"), 0);
  setTimeout(() => console.log("Time2 is set"), 3000);
  setImmediate(() => console.log("Done"));
});

console.log("Hello from the top level code");
