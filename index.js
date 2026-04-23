let track = document.querySelector(".track");
let slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {
    index++;

    let ancho = document.querySelector(".carousel").clientWidth;

    track.style.transform = `translateX(-${index * ancho}px)`;

    if (index >= slides.length) {
        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0px)";
            index = 0;

            setTimeout(() => {
                track.style.transition = "transform 0.5s ease";
            }, 50);
        }, 500);
    }

}, 3000);



function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.classList.toggle('hidden');
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    
    if (input.value.trim() === "") return;

    // Mensaje del usuario
    body.innerHTML += `<p style="text-align:right;"><b>Tú:</b> ${input.value}</p>`;
    
    const userText = input.value.toLowerCase();
    input.value = "";

    // Respuesta simulada (Aquí podrías conectar con la API de OpenAI)
    setTimeout(() => {
        let response = "Lo siento, aún estoy aprendiendo sobre los candidatos.";
        
        if(userText.includes("hola")) response = "¡Hola! Soy la IA de las Elecciones 2026. ¿Qué partido quieres conocer?";
        if(userText.includes("partidos")) response = "Hay varios partidos como Fuerza Popular, Perú Libre y muchos más en la lista.";
        
        body.innerHTML += `<p class="bot-msg"><b>IA:</b> ${response}</p>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}