const { sumSeries } = require("./lib");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("input n: ", input => {
  console.log(sumSeries(input));
  readline.close();
})
