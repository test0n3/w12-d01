// first try - simple try
// uncomment the HTML lines required.

const sum = () => {
  const $first = document.getElementById("first").value;
  const $second = document.getElementById("second").value;
  result(parseInt($first) + parseInt($second));
}

const minus = () => {
  const $first = document.getElementById("first").value;
  const $second = document.getElementById("second").value;
  result(parseInt($first) - parseInt($second));
}

const multi = () => {
  const $first = document.getElementById("first").value;
  const $second = document.getElementById("second").value;
  result(parseInt($first) * parseInt($second));
}

const divi = () => {
  const $first = document.getElementById("first").value;
  const $second = document.getElementById("second").value;
  result(parseInt($first) / parseInt($second));
}

const power = () => {
  const $first = document.getElementById("first").value;
  const $second = document.getElementById("second").value;
  result(Math.pow(parseInt($first), parseInt($second)));
}

const squareroot = () => {
  const $first = document.getElementById("first").value;
  const $second = document.getElementById("second").value;
  result(Math.pow(parseInt($first), 1/parseInt($second)));
}

const result = (myResult) => {
  document.getElementById("results").innerHTML = myResult;
}
