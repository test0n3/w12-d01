function clickOrigin(e) {
  var target = e.target;
  var tag = {};
  tag.id = target.id;
  return tag;
}

function messenger(text) {
  document.getElementById("results").innerHTML = text;
}

function sum(firstOp, secondOp) {
  return parseFloat(firstOp) + parseFloat(secondOp);
}

function subs(firstOp, secondOp) {
  return parseFloat(firstOp) - parseFloat(secondOp);
}

function multi(firstOp, secondOp) {
  return parseFloat(firstOp) * parseFloat(secondOp);
}

function div(firstOp, secondOp) {
  return parseFloat(firstOp) / parseFloat(secondOp);
}

function power(firstOp, secondOp) {
  return Math.pow(parseFloat(firstOp), parseFloat(secondOp));
}

function squ(firstOp, secondOp) {
  return Math.pow(parseFloat(firstOp), 1 / parseFloat(secondOp));
}

document.body.onclick = function(event) {
  elem = clickOrigin(event);
  // check values in input
  var $first = document.getElementById("first");
  var $second = document.getElementById("second");
  //
  switch (elem.id) {
    case "sum":
      messenger(sum($first.value, $second.value));
      break;
    case "subs":
      messenger(subs($first.value, $second.value));
      break;
    case "multi":
      messenger(multi($first.value, $second.value));
      break;
    case "div":
      messenger(div($first.value, $second.value));
      break;
    case "power":
      messenger(power($first.value, $second.value));
      break;
    case "squ":
      messenger(squ($first.value, $second.value));
      break;
    default:
      return 0;
      break;
  }
};
