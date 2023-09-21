const lib = require("./lib")

// test given from the official smkdev page
// - underscore_case
// - first_name
// - Some_Variable
// - calculate_AGE
// - delayed_departure

test("convert underscore_case to underscoreCase", () => {
  expect(lib.camelCaseify("underscore_case")).toBe("underscoreCase")
});

test("convert first_name to firstName", () => {
  expect(lib.camelCaseify("first_name")).toBe("firstName")
});

test("convert Some_Variable to someVariable", () => {
  expect(lib.camelCaseify("Some_Variable")).toBe("someVariable")
});

test("convert calculate_AGE to calculateAge", () => {
  expect(lib.camelCaseify("calculate_AGE")).toBe("calculateAge")
});

test("convert delayed_departure to delayedDeparture", () => {
  expect(lib.camelCaseify("delayed_departure")).toBe("delayedDeparture")
});
