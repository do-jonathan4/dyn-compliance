const form = document.querySelector("form")
const vol = document.querySelector("#vol")
const pip = document.querySelector("#pip")
const peep = document.querySelector("#peep")
const answer = document.querySelector("#answer")
const myArr = [vol, pip, peep]
 
document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        result(calc(vol.value, pip.value, peep.value))
        vol.focus()
        vol.setSelectionRange(0, vol.value.length)
    }
})
 
const calc = (a, b, c) => {
    const num1 = Number(a)
    const num2 = Number(b)
    const num3 = Number(c)
    const result = num1/(num2-num3)
    return result ? `${result.toFixed(2)} mL/cmH2O` : 'Use only numbers please'
}
 
const result = n => {
    answer.textContent = n
}
