let precio = parseFloat(prompt("Ingrese el valor de una empanada de carne promedio"));
if ((precio > 0) && (precio <= 25)) {
    alert("empanada low cost");
} else if ((precio > 25) && (precio <= 90)) {
    alert("empanada puerto madero style");

} else if (precio > 90) {
    alert("Es muy costosa");
} else {
    alert("Salí de ahí mejor comprá un pedazo de pizza");
}