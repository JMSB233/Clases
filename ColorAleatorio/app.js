// SELECCIONAR LOS ELEMENTOS DEL DOM
// Seleccionamos el primer elemento <button> en el documento y lo almacenamos en la variable 'boton'.
const boton = document.querySelector('button');
// Seleccionamos el elemento con id 'color' y lo almacenamos en la variable 'color'.
// Este elemento mostrará el código de color generado.
const color = document.getElementById('color');
// Definimos una función que genera un color aleatorio en formato hexadecimal.
function generarColorAleatorio (){
    // Definimos los posibles dígitos hexadecimales (0-9 y A-F).
    let digitos = '0123456789ABCDEF';
    // Iniciamos la variable 'colorHex' con el símbolo '#' para formar un color hexadecimal.
    let colorHex = '#';    

    // Creamos un bucle que se repetirá 6 veces, generando cada dígito del color hexadecimal.
    for (let i = 0; i < 6; i++) {
        // Obtenemos un índice aleatorio entre 0 y 15.
        let indiceAleatorio = Math.floor(Math.random() * 16);
        console.log(indiceAleatorio); console
        // Añadimos el dígito correspondiente al 'colorHex'.
        colorHex += digitos[indiceAleatorio];
        console.log(colorHex);  // MostramoscolorAleatorio;rAleatoriolor parcial en cada paso del bucle (opcional para depuración).
    }
    return colorHex;
}
// Añadimos un evento 'click' al botón.
// Cuando el usuario hace clic en el botón, se ejecuta la función anónima.
boton.addEventListener('click', function() {
    // Llamamos a la función 'generarColorAleatorio' para obtener un nuevo color hexadecimal.
    let colorAleatorio = generarColorAleatorio();
    // Asignamos el color generado como texto al elemento 'color' para mostrarlo en pantalla.
    color.textContent = colorAleatorio;
    // Cambiamos el color de fondo del cuerpo del documento al color aleatorio generado.
    document.body.style.backgroundColor = colorAleatorio;
});
