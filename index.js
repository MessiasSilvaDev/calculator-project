const previousOperationText = document.querySelector('.previousOperation')
const currentOperationText = document.querySelector('.currentOperation')
const buttons = document.querySelectorAll('.wrapper-button button')

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperationText = ''
  }

  addDigit(digit) {
    console.log(digit)
  }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const value = e.target.innerText

    if (+value >= 0 || value === '.') {
      calc.addDigit(value)
    } else {
      console.log('Op: ' + value)
    }
  })
})
