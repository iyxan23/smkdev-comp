const { camelCaseify } = require("./lib");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("input text: ", input => {
  console.log(camelCaseify(input));
  readline.close();
})
