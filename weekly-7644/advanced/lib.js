function sumSeries(n) {
  return Array.from({ length: n }, (_, i) => Number("2".repeat(i + 1)))
              .reduce((a, c) => a + c, 0)

}

try {
  module.exports = {
    sumSeries
  };
} catch (e) {
  // running on a browser
}
