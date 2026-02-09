// FUNCTIONS //
// Is else required?:
// No difference, return will stop the function immediately

// Rewrite the function "?" or "||":
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?")
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?")
}

// Function min(a, b):

function min(a, b) {
  if(a < b) {
    return a
  } else {
    return b
  }
}

// Other solution
function min(a, b) {
  return Math.min(a, b)
}

// Function pow(x, n):

let x = prompt("x", "")
let n = prompt("n", "")

function pow(x,n) {
  if(n < 1) return "Use a number higher or equal to 1"
  let result = x
  for(let i = 1; i < n; i++) {
  	result *= x 
  }
  return(result)
}

alert(pow(x,n))

// second solution 
function pow(x,n) {
  if(n < 1) return "Use a number higher or equal to 1"
  return Math.pow(x, n)
}