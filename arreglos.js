function frases()
{
// Arreglo de opciones
var opciones = [
    "Algunos pierden la mente y se vuelven alma, locos. Algunos pierden el alma y se convierten en mente, intelectuales. Algunos pierden ambos y son aceptados.",
    "Qué triste fueron esos años, tener el deseo y la necesidad de vivir pero no tener la habilidad.",
    "El amor es una niebla que se quema con el primer rayo de luz de la realidad",
    "Algunas personas no enloquecen nunca. Qué vida tan horrible deben tener.",
    "La soledad real no se limita necesariamente a cuando estás solo.",
    "Tienes que morir unas cuantas veces antes de poder vivir de verdad.",
    "Casi siempre, lo mejor de la vida consiste en no hacer nada en absoluto, en pasar el tiempo reflexionando.",
    "El conocimiento, si no se sabe aplicar, es peor que la ignorancia.",
    "Un hombre saca del pensamiento solamente problemas.",
    "Estar solo nunca se sintió adecuado. A veces se sentía bien, pero nunca adecuado."];

// Seleccionar una opción aleatoria
var opcionSeleccionada = opciones[Math.floor(Math.random() * opciones.length)];

// Imprimir la opción seleccionada
alert(opcionSeleccionada);
console.log(opcionSeleccionada);
}