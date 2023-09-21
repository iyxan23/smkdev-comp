function camelCaseify(input) {
  return input
          .toLowerCase()
          .replace(/_[a-zA-Z]/, (x) => {
            return x.slice(1).toUpperCase();
          });
}

module.exports = {
  camelCaseify
};
