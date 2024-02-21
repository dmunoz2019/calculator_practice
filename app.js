// vamos a hacer un update al valor preterminado del elemento con el id display
const display = document.querySelector('#display');
function updateDisplay(value) {
  // lets add a condition to check if the value is the first value
    if (display.placeholder == '0' ) {
                console.log(display.placeholder);

        display.placeholder = value;
    } else {
        // concatenamos el valor del display con el valor del boton clickeado

        display.placeholder =  display.placeholder + value;
    }  
    
}

function clearDisplay() {
    display.placeholder = '0';
}

function calculate() {
    display.placeholder = eval(display.placeholder);

}
// Primero, obtenemos una referencia al elemento del DOM con el ID 'calculator', similar a cómo seleccionarías una tabla en PL/SQL usando un identificador único.
document.getElementById('calculator').addEventListener('click', function(e) {
    // Aquí, escuchamos un evento de clic en el elemento 'calculator'. Esto es similar a reaccionar a un trigger o evento en una base de datos.
     if (e.target.textContent === 'C') { // Verificamos si el elemento clickeado es un botón. Esto es análogo a filtrar datos basados en una condición específica en PL/SQL.
        clearDisplay(); // Llamamos a la función updateDisplay con el valor del botón clickeado como argumento, similar a cómo llamarías a una función con un parámetro en PL/SQL.
    } else if (e.target.textContent === '=') { // Verificamos si el elemento clickeado es un botón. Esto es análogo a filtrar datos basados en una condición específica en PL/SQL.
        calculate(); // Llamamos a la función updateDisplay con el valor del botón clickeado como argumento, similar a cómo llamarías a una función con un parámetro en PL/SQL.
    }    else if (e.target.tagName === 'BUTTON' ) { // Verificamos si el elemento clickeado es un botón. Esto es análogo a filtrar datos basados en una condición específica en PL/SQL.
  // Verificamos si el elemento clickeado es un botón. Esto es análogo a filtrar datos basados en una condición específica en PL/SQL.
        const key = e.target.textContent; // Obtenemos el texto del botón clickeado, similar a cómo seleccionarías un valor específico de un registro en PL/SQL.
        updateDisplay(key); // Llamamos a la función updateDisplay con el valor del botón clickeado como argumento, similar a cómo llamarías a una función con un parámetro en PL/SQL.
    }
});  
