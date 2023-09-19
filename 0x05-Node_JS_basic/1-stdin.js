// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  // This code block runs when stdin is connected to a terminal
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  // This code block runs when stdin is not connected to a terminal (e.g., input piped from echo)
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });

  // This code block ensures that the "This important software is now closing" message is displayed when the program exits
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
