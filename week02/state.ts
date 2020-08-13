
/**
 * match abababx
 * @param string 
 */
function match(string) {
  let state = start
  for (let c of string) {
    state = state(c)
  }

  return state === end
}

function start(c) {
  return c === 'a' ? found1A : start
}

function end(c) {
  return end
}

function found1A(c) {
  return c === 'b' ? found1B : start(c)
}

function found1B(c) {
  return c === 'a' ? found2A : start(c)
}

function found2A(c) {
  return c === 'b' ? found2B : start(c)
}

function found2B(c) {
  return c === 'a' ? found3A : start(c)
}

function found3A(c) {
  return c === 'b' ? found3B : start(c)
}

function found3B(c) {
  return c === 'x' ? end : start(c)
}

export default match
