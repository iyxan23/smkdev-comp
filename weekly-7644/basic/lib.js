function camelCaseify(input) {
  return input.toLowerCase().replace(/_[a-zA-Z]/g, (x) => {
    return x.slice(1).toUpperCase();
  });
}

try {
  module.exports = {
    camelCaseify,
  };
} catch (e) {
  // running on a browser
}
