// context_simulation.js
// Simulating a chat system with a limited context window

let chatHistory = [];
const MAX_CONTEXT = 5;

function addMessage(sender, message) {
  const newMessage = { sender, message };

  if (chatHistory.length >= MAX_CONTEXT) {
    chatHistory.shift();
  }

  chatHistory.push(newMessage);

  console.clear();
  console.log("Chat History:");
  chatHistory.forEach((msg, index) => {
    console.log(`${index + 1}. ${msg.sender}: ${msg.message}`);
  });
}

const messages = [
  ["User", "Hi!"],
  ["Bot", "Hello! How can I help you today?"],
  ["User", "What’s the weather like?"],
  ["Bot", "It's sunny and 24°C."],
  ["User", "Nice! What about tomorrow?"],
  ["Bot", "Expect some clouds and a high of 22°C."],
  ["User", "Thanks! Also, tell me a joke."],
  ["Bot", "Why don’t scientists trust atoms? Because they make up everything!"],
];

let i = 0;
let interval = setInterval(() => {
  if (i < messages.length) {
    const [sender, msg] = messages[i];
    addMessage(sender, msg);
    i++;
  } else {
    clearInterval(interval);
  }
}, 1000);
