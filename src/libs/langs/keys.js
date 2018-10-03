export default [
  "addCounterButton",
  "addNewPersonalButton"
].reduce((r, i) => {
  r[i] = i
  return r
}, {})
