
const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2)
}

const division = (num1, num2) =>{
    return parseInt(num1) % parseInt(num2)
}

const multiplicacion = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2)
}

alert("Bienvenido")

do {
    alert ("¿Que operacion hacer?")
    operacion = parseInt(prompt ("1: suma, 2: resta, 3: division, 4: multiplicacion"))
    switch(operacion){
        case 1:
            let primerValorSuma = prompt("Valor 1")
            let segundoValorSuma = prompt("Valor 2")
            resultado = suma(primerValorSuma, segundoValorSuma)
            alert(`Tu resultado es ${resultado}`)
            break
        case 2: 
            let primerValorResta = prompt("Valor 1")
            let segundoValorResta = prompt("Valor 2")
            resultado = resta(primerValorResta, segundoValorResta)
            alert(`Tu resultado es ${resultado}`)
            break
        case 3: 
            let primerValorDivision = prompt("Valor 1")
            let segundoValorDivision = prompt("Valor 2")
            resultado = division(primerValorDivision, segundoValorDivision)
            alert(`Tu resultado es ${resultado}`)
            break
        case 4:
            let primerValorMultiplicacion = prompt("Valor 1")
            let segundoValorMultiplicaion = prompt("Valor 2")
            resultado = multiplicacion(primerValorMultiplicacion, segundoValorMultiplicaion)
            alert(`Tu resultado es ${resultado}`)
            break
        default:
            alert("Error en la operacion")
        break
    }
    continuarOperacion = confirm("¿Desea continuar con las operaciones?")
    if(continuarOperacion == false){
        alert("Fue un placer ayudarte, vuelve pronto")
    }
}while(continuarOperacion == !false)  



