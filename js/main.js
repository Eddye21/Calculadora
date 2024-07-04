
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
    operacion = prompt ("1: suma, 2: resta, 3: division, 4: multiplicacion")
    if(operacion == "1"){
        let numero1 = prompt("Valor 1")
        let numero2 = prompt("Valor 2")
        resultado = suma(numero1, numero2)
        alert(`Tu resultado es ${resultado}`)
    }
    else if( operacion =="2"){
        let numero1 = prompt("Valor 1")
        let numero2 = prompt("Valor 2")
        resultado = resta(numero1, numero2)
        alert(`Tu resultado es ${resultado}`)
    }
    else if( operacion == "3"){
        let numero1 = prompt("Valor 1")
        let numero2 = prompt("Valor 2")
        resultado = division(numero1, numero2)
        alert(`Tu resultado es ${resultado}`)
    }
    else if( operacion == "4"){
        let numero1 = prompt("Valor 1")
        let numero2 = prompt("Valor 2")
        resultado = multiplicacion(numero1, numero2)
        alert(`Tu resultado es ${resultado}`)
    }else{
        alert("Error en la operacion")
    }
    continuarOperacion = confirm("¿Desea continuar con las operaciones?")
    if(continuarOperacion == false){
        alert("Fue un placer ayudarte, vuelve pronto")
    }
}while(continuarOperacion == !false)  



