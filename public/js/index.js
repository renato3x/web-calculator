const view = document.querySelector('#view')
view.innerHTML = '0'

const pointButton = document.querySelector('#point')
const resultButton = document.querySelector('#btn-calc-result')
const resetButton = document.querySelector('#reset')
const deleteButton = document.querySelector('#delete')
const supButton = document.querySelector('#sup')
const numericButtons = document.querySelectorAll('.btn-calc-number')
const symbolButtons = document.querySelectorAll('.btn-calc-symbol')

numericButtons.forEach(numericButton => {
  numericButton.addEventListener('click', () => {
    if (view.innerHTML == '0') {
      view.innerHTML = numericButton.value
    } else {
      const lastIndex = view.innerHTML.length - 1
      if (view.innerHTML[lastIndex] != '²') {
        view.innerHTML += numericButton.value
      }
    }
  })
})

symbolButtons.forEach(symbolButton => {
  symbolButton.addEventListener('click', () => {
    const lastIndex = view.innerHTML.length - 1

    if (view.innerHTML[lastIndex] != ' ' && !isNaN(view.innerHTML[lastIndex]) || view.innerHTML[lastIndex] == '.' || view.innerHTML[lastIndex] == '²') {
      view.innerHTML += ` ${symbolButton.value} `
    }
  })
})

pointButton.addEventListener('click', () => {
  const lastIndex = view.innerHTML.length - 1

  if (view.innerHTML.includes(' ')) {
    if (view.innerHTML[lastIndex] != ' ') {
      const splittedView = view.innerHTML.split(' ')
      const lastIndexOfSplittedView = splittedView.length - 1
      
      if (!isNaN(splittedView[lastIndexOfSplittedView]) && !splittedView[lastIndexOfSplittedView].includes('.') && !splittedView[lastIndexOfSplittedView].includes('²')) {
        view.innerHTML += pointButton.value
      }
    }
  } else if (view.innerHTML.length != 0 && !view.innerHTML.includes('.') && !view.innerHTML.includes('²')) {
    view.innerHTML += pointButton.value
  }
})

deleteButton.addEventListener('click', () => {
  const lastIndex = view.innerHTML.length - 1

  if (view.innerHTML[lastIndex] == ' ' && view.innerHTML[lastIndex - 2] == ' ') {
    view.innerHTML = view.innerHTML.slice(0, -3)
  } else {
    view.innerHTML = view.innerHTML.slice(0, -1)
  }
})

resetButton.addEventListener('click', () => {
  view.innerHTML = ''
})

resultButton.addEventListener('click', () => {
  const lastIndex = view.innerHTML.length - 1

  if (view.innerHTML[lastIndex] != ' ' && !isNaN(view.innerHTML[lastIndex]) || view.innerHTML[lastIndex] == '.' || view.innerHTML[lastIndex] == '²') {
    let expression = view.innerHTML

    expression = replacer(expression)

    if (expression.includes('²')) {
      expression = parseSupToPow(expression)
    }

    const finalResult = eval(expression)

    view.innerHTML = finalResult
  }
})

supButton.addEventListener('click', () => {
  const lastIndex = view.innerHTML.length - 1
  if (view.innerHTML[lastIndex] != ' ' && !isNaN(view.innerHTML[lastIndex]) || view.innerHTML[lastIndex] == '.') {
    view.innerHTML = view.innerHTML.concat(supButton.value)
  }
})