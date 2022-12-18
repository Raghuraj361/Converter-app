const form = document.getElementById("form")
const to = document.getElementById("to")
const inputNumber = document.getElementById("input-number")
const resultBox = document.getElementById("result-box")

document.getElementById("convert").addEventListener('click', () => {
    //check form
    let formValue = form.value
    // check to
    let toValue = to.value
    // check input number
    let inputValue = inputNumber.value
    // convert input number "form" to "to"
    let result = convertBase(formValue, toValue, inputValue)
    // show the result in result box
    resultBox.innerText = result
})

function convertBase(fromBase, toBase, num) {
    let d = parseInt(num, fromBase) // convert number into base10

    let res = d.toString(toBase) // convert base10 required base

    return res
}

document.getElementById("swap").addEventListener('click', () => {
    let temp = form.value
    form.value = to.value
    to.value = temp
})