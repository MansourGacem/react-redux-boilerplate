export default [
  "addCounterButton",
].reduce((r, i) => {
  r[i] = i
  return r
}, {})
