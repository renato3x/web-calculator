document.addEventListener('keydown', event => {
  if (!isNaN(event.key)) {
    if (view.innerHTML == '0') {
      view.innerHTML = event.key
    } else {
      const lastIndex = view.innerHTML.length - 1
      if (view.innerHTML[lastIndex] != '²') {
        view.innerHTML += event.key
      }
    }
  }
})

document.addEventListener('keyup', event => {
  if (event.key == '.') {
    const lastIndex = view.innerHTML.length - 1

    if (view.innerHTML.includes(' ')) {
      if (view.innerHTML[lastIndex] != ' ') {
        const splittedView = view.innerHTML.split(' ')
        const lastIndexOfSplittedView = splittedView.length - 1
        
        if (!isNaN(splittedView[lastIndexOfSplittedView]) && !splittedView[lastIndexOfSplittedView].includes('.') && !splittedView[lastIndexOfSplittedView].includes('²')) {
          view.innerHTML += event.key
        }
      }
    } else if (view.innerHTML.length != 0 && !view.innerHTML.includes('.') && !view.innerHTML.includes('²')) {
      view.innerHTML += event.key
    }
  }
})

document.addEventListener('keyup', event => {
  const lastIndex = view.innerHTML.length - 1
  const symbolsArray = ['+', '−', '×', '÷']

  if (view.innerHTML[lastIndex] != ' ' && !isNaN(view.innerHTML[lastIndex]) || view.innerHTML[lastIndex] == '.' || view.innerHTML[lastIndex] == '²') {
    if (event.key == '+') {
      view.innerHTML += ` ${symbolsArray[0]} `
    } else if (event.key == '-') {
      view.innerHTML += ` ${symbolsArray[1]} `
    } else if (event.key == '*') {
      view.innerHTML += ` ${symbolsArray[2]} `
    } else if (event.key == '/') {
      view.innerHTML += ` ${symbolsArray[3]} `
    }
  }
})

document.addEventListener('keydown', event => {
  if (event.key.toLowerCase() == 'backspace' || event.key.toLowerCase() == 'delete') {
    const lastIndex = view.innerHTML.length - 1

    if (view.innerHTML[lastIndex] == ' ' && view.innerHTML[lastIndex - 2] == ' ') {
      view.innerHTML = view.innerHTML.slice(0, -3)
    } else {
      view.innerHTML = view.innerHTML.slice(0, -1)
    }
  }
})

document.addEventListener('keyup', event => {
  if (event.key == '=' || event.key.toLowerCase() == 'enter') {
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
  }
})