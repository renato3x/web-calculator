const parseSupToPow = (expression = '') => {
  const splittedExpression = expression.split(' ')

  for (index in splittedExpression) {
    if (splittedExpression[index].includes('²')) {
      splittedExpression[index] = splittedExpression[index].replace('²', '')
      splittedExpression[index] = `Math.pow(${splittedExpression[index]}, 2)`
    }
  }

  let newExpression = ''
  
  splittedExpression.forEach(value => newExpression += `${value} `)

  return newExpression
}