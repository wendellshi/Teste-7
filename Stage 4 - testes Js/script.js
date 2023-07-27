let numberOne = Number(prompt("Digite um numero:"));
let numberTwo = Number(prompt("Digite mais um numero:"));


let math = [numberOne, numberTwo]

if(numberOne && numberTwo >= 0) {
  alert(`A soma dos números digitados é: ${math[0] + math[1]}`)
  alert(`A subtração dos números digitados é: ${math[0] - math[1]}`)
  alert(`A multiplicação dos números digitados é: ${math[0] * math[1]}`)
  alert(`A divisão dos números digitados é: ${math[0] / math[1]}`)
  alert(`A Resto da divisão dos números digitados é: ${math[0] % math[1]}`)

} else {
  alert("Error !! Digite apenas Numeros e que sejam sempre igual ou maior que 0")
}