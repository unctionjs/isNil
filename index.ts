export default function isNil<A> (value: A): boolean {
  return value === undefined || value === null;
}
