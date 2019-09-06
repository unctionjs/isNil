/* eslint-disable no-undefined, no-magic-numbers */
import isNil from "./index";

test("works", () => {
  expect(isNil(null)).toEqual(true);
});

test("works", () => {
  expect(isNil(undefined)).toEqual(true);
});

test("works", () => {
  expect(isNil(0)).toEqual(false);
});

test("works", () => {
  expect(isNil([])).toEqual(false);
});

test("works", () => {
  expect(isNil({})).toEqual(false);
});

test("works", () => {
  expect(isNil(false)).toEqual(false);
});

test("works", () => {
  expect(isNil(true)).toEqual(false);
});

test("works", () => {
  expect(isNil("true")).toEqual(false);
});

test("works", () => {
  expect(isNil("")).toEqual(false);
});
