/* eslint-disable no-undefined, no-magic-numbers */
import isNil from "./index.ts";

test(() => {
  expect(isNil(null)).toEqual(true);
});

test(() => {
  expect(isNil(undefined)).toEqual(true);
});

test(() => {
  expect(isNil(0)).toEqual(false);
});

test(() => {
  expect(isNil([])).toEqual(false);
});

test(() => {
  expect(isNil({})).toEqual(false);
});

test(() => {
  expect(isNil(false)).toEqual(false);
});

test(() => {
  expect(isNil(true)).toEqual(false);
});

test(() => {
  expect(isNil("true")).toEqual(false);
});

test(() => {
  expect(isNil("")).toEqual(false);
});
