const output = document.getElementById('output');
const startButton = document.getElementById('start-video');

const messages = [
   
 
    "que significa madura y exageraciones",
    "¡qué exagerado eres!",
    "Es obligar, decir a la vez son perseguidores esa mujeres",
   "que son conducta una amenaza",
   "Algunas mujeres pueden ejercer presión o amenazar al hombre",
   "para obligarlos a hacer lo que ellas desean",
   "ya sea en relación con su carrera universitaria,",
   "su trabajo u otros aspectos de la vida",
   "Es crucial entender que la presión y las amenazas ",
   "en una relación pueden crear un ambiente de desconfianza y conflicto",
   "llega al chimes chimoso y chimosa",
   "que no se resuelve su situacion de esa mujeres",
   "¿quien tiene en esa mente?",
   "Una depresión: Un Efecto Silencioso de los Conflictos",
   "Por ejemplos",
  " hay una mujer que se dedica a la administración pública y contabilidad.",
  "Esta mujer no acepta la elección del hombre",
  "de seguir su carrera en programación",
  "creación de páginas web y desarrollo de software",
  "En cambio,ese hombre acepta la elección de la mujer por obligacion",
  "a estudiar administración pública y contabilidad",
  

];

function typeMessage(message, delay) {
    return new Promise(resolve => {
        let index = 0;
        const interval = setInterval(() => {
            output.lastChild.textContent += message[index]; // Agrega el texto al último párrafo
            index++;
            if (index === message.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

async function startVideo() {
    output.innerHTML = ''; // Limpia el contenedor antes de empezar
    for (let msg of messages) {
        const p = document.createElement('p'); // Crea un nuevo párrafo
        output.appendChild(p); // Añade el nuevo párrafo al contenedor
        await typeMessage(msg, 50); // Escribe cada mensaje
        await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo
    }
}

startButton.addEventListener('click', startVideo);
