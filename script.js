const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();

  if (message !== "") {
    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + message;
    userMessage.style.marginBottom = "10px";
    chatBox.appendChild(userMessage);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Fake AI reply
    setTimeout(() => {
      const aiReply = document.createElement("div");
      aiReply.textContent = "AI: I'm just a demo response.";
      aiReply.style.color = "#888";
      chatBox.appendChild(aiReply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
});
