import isType from "@unction/istype";
export default function isNil(value) {
  return isType("undefined")(value) || isType("null")(value);
}
