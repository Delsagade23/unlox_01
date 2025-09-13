const nameElement = document.getElementById('interactive-name');

const messages = [
    "Hey, my name is Chandrasekhar",
    "Welcome to my page! ✨",
    "Click me again!",
    "I'm learning to code. 💻"
];

let messageIndex = 0;

nameElement.addEventListener('click', () => {

    messageIndex++;
 
    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    nameElement.textContent = messages[messageIndex];
});
