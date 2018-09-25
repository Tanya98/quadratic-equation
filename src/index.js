module.exports = function solveEquation(equation) {
  debugger;
  let a, b, c;
  [a, b, c] = getNum(equation);
  return getList(a, b, c);
}
function getNum(equation) {
  let a = equation.split(' * x^2')[0];
  let a_sign = equation.split(a + '* x^2')[0];
  a = parseInt(a_sign + a);

  let b_sign = equation.split('* x^2 ')[1].charAt(0);
  let b = equation.split(' * x^2 ' + b_sign + ' ')[1].split(' * x ')[0];
  b = parseInt(b_sign + b);

  let c_sign = equation.split(' * x ')[1].charAt(0);
  let c = equation.split('* x ' + c_sign + ' ')[1];
  c = parseInt(c_sign + c);
  return [a, b, c];
}
function getList(a, b, c) {
  let list = [];
  list.push(getX('+', a, b, c));
  list.push(getX('-', a, b, c));
  list.sort((a, b) => a - b);
  return list;
}
function getX(sign, a, b, c) {
  let x, b1, a1, c1;
  b1 = parseInt(- + b);
  a1 = 2 * a;
  c1 = Math.sqrt((b * b) - 4 * a * c);
  return x = Math.round((sign === '+') ? ((b1 + c1) / a1) : ((b1 - c1) / a1));
}