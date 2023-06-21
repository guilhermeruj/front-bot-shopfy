var chatCard = document.getElementById("chatCard");
var chatContent = document.querySelector(".chat-content");
var isChatVisible = false;

function toggleChat() {
  if (isChatVisible) {
    chatCard.style.transform = "translateY(0%)";
    chatContent.style.display = "none";
  } else {
    chatCard.style.transform = "translateY(0)";
    chatContent.style.display = "block";
  }
  isChatVisible = !isChatVisible;
}

// Controle do Chat

var estadoChat = 0;
var nome, telefone, assunto;

document
  .getElementById("chatForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var inputMensagem = document.querySelector(".message-input");
    var listaMensagens = document.getElementById("messages");

    // Função para rolar a barra de rolagem para baixo
    function scrollChatWindow() {
      var chatWindow = document.querySelector(".chat-window");
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    switch (estadoChat) {
      case 0:
        nome = inputMensagem.value;
        inputMensagem.value = "";
        listaMensagens.innerHTML += `<li class="list-align-right">${nome}</li>`;
        listaMensagens.innerHTML += `<li class="list-align-left">Perfeito ${nome}, agora me informe seu telefone?</li>`;
        estadoChat++;
        scrollChatWindow();
        break;
      case 1:
        telefone = inputMensagem.value;
        inputMensagem.value = "";
        listaMensagens.innerHTML += `<li class="list-align-right">${telefone}</li>`;
        listaMensagens.innerHTML += `<li class="list-align-left">Ok, o seu telefone é ${telefone}. Agora, qual é o assunto?</li>`;
        estadoChat++;
        scrollChatWindow();
        break;
      case 2:
        assunto = inputMensagem.value;
        inputMensagem.value = "";
        listaMensagens.innerHTML += `<li class="list-align-right">${assunto}</li>`;
        listaMensagens.innerHTML += `<li class="list-align-left">Entendi, você quer falar sobre ${assunto}. Agora vou enviar as suas informações para o nosso sistema.</li>`;
        scrollChatWindow();

        fetch("http://localhost:3030/api/chats", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, telefone, assunto }),
        })
          .then((response) => response.json())
          .then((data) => {
            listaMensagens.innerHTML += `<li class="list-align-left">Só um minuto que vou te chamar no Whatsapp!</li>`;
            scrollChatWindow();
          })
          .catch((error) => {
            console.error("Error:", error);
            listaMensagens.innerHTML += `<li class="list-align-left">Ocorreu um erro ao enviar as suas informações.</li>`;
            scrollChatWindow();
          });

        estadoChat = 0;
        break;
    }
  });
