const replacer = (expression = '') => {
  expression = expression.replaceAll('+', '+')
  expression = expression.replaceAll('−', '-')
  expression = expression.replaceAll('×', '*')
  expression = expression.replaceAll('÷', '/')

  return expression
}