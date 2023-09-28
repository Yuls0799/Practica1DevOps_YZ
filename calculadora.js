document.getElementById("Calculadoraform").addEventListener("submit", function(event) {
    event.preventDefault();

    //Declaración de numeros
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacion = document.getElementById("operacion").value;
    var resultado = calcularResultado(num1, num2, operacion);

    //Para poder ver el resultado en la pantalla
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;

    // Borrar los inputs
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
});

function calcularResultado(num1, num2, operacion) {
    var resultado;

    switch (operacion) {
        case "suma":
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(num1, num2);
            break;
        case "division":
            resultado = division(num1, num2);
            break;
        default:
            resultado = "ERROR";
    }

    return resultado;
}

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: Estimado usuario, no se divide entre 0";
    }
}
