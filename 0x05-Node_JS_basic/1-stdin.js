// 1-stdin.js

const readline = require('readline');

const readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");

readline.question("", (name) => {
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing");
  readline.close();
});
