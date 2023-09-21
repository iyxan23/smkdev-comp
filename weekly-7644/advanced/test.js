const { sumSeries } = require("./lib")

// test given from the official smkdev page
// - 5 -> 24690

test("n of 5", () => {
  expect(sumSeries(5)).toBe(24690)
});
