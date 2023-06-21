// Criação do elemento link <link> para o arquivo CSS
var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "chatStyle.css";
// cssLink.href = "https://gkdata.com.br/cdn/chatStyle.css";

// Criação do elemento link para os Icons
var cssIcon = document.createElement("link");
cssIcon.rel = "stylesheet";
cssIcon.href =
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";

//Criação do elemento link para foto
var cssFont = document.createElement("link");
cssFont.rel = "stylesheet";
cssFont.href =
  "https://fonts.googleapis.com/css2?family=Helvetica&display=swap";

// Adiciona o elemento link ao cabeçalho do documento HTML
document.head.appendChild(cssLink);

// Criação do elemento div principal com a classe "card" e o ID "chatCard"
var chatCard = document.createElement("div");
chatCard.classList.add("mychat-card");
chatCard.id = "chatCard";

// Criação do elemento div com a classe "chat-header"
var chatHeader = document.createElement("div");
chatHeader.classList.add("chat-header");

// Criação do elemento de link <a> com a classe "link-chat", o ID "card1" e o atributo onclick
var linkChat = document.createElement("a");
linkChat.href = "#";
linkChat.id = "card1";
linkChat.classList.add("link-chat");
linkChat.setAttribute("onclick", "toggleChat()");

// Criação do elemento div com a classe "loader"
var loader = document.createElement("div");
loader.classList.add("loader");
loader.textContent = "Fale conosco";

// Criação dos elementos span dentro do div "loader"
var span1 = document.createElement("span");
var span2 = document.createElement("span");

// Adiciona os elementos span ao div "loader"
loader.appendChild(span1);
loader.appendChild(span2);

// Adiciona o div "loader" ao link <a>
linkChat.appendChild(loader);

// Criação do elemento div com a classe "chat-content"
var chatContent = document.createElement("div");
chatContent.classList.add("chat-content");

// Criação do elemento div com a classe "chat-window"
var chatWindow = document.createElement("div");
chatWindow.classList.add("chat-window");

// Criação da lista <ul> com a classe "message-list" e o ID "messages"
var messageList = document.createElement("ul");
messageList.classList.add("message-list");
messageList.id = "messages";

// Criação do primeiro item da lista <li> com a classe "list-align-left" e o texto correspondente
var listItem1 = document.createElement("li");
listItem1.classList.add("list-align-left");
listItem1.textContent = "Olá, eu vou te ajudar a acelerar o seu atendimento!";
messageList.appendChild(listItem1);

// Criação do segundo item da lista <li> com a classe "list-align-left" e o texto correspondente
var listItem2 = document.createElement("li");
listItem2.classList.add("list-align-left");
listItem2.textContent = "Me informe por favor o seu nome";
messageList.appendChild(listItem2);

// Adiciona a lista <ul> ao div "chat-window"
chatWindow.appendChild(messageList);

// Criação do elemento div com a classe "chat-input"
var chatInput = document.createElement("div");
chatInput.classList.add("chat-input");

// Criação do formulário <form> com o ID "chatForm"
var chatForm = document.createElement("form");
chatForm.id = "chatForm";

// Criação do input <input> com a classe "message-input" e o placeholder correspondente
var messageInput = document.createElement("input");
messageInput.type = "text";
messageInput.classList.add("message-input");
messageInput.placeholder = "Escreva a mensagem";

// Criação do botão <button> com a classe "send-button" e o ícone correspondente
var sendButton = document.createElement("button");
sendButton.classList.add("send-button");
var sendIcon = document.createElement("i");
sendIcon.classList.add("bi", "bi-send-fill");
sendButton.appendChild(sendIcon);

// Adiciona o input e o botão ao formulário
chatForm.appendChild(messageInput);
chatForm.appendChild(sendButton);

// Adiciona o formulário ao div "chat-input"
chatInput.appendChild(chatForm);

// Adiciona o div "chat-header" ao div principal "chatCard"
chatCard.appendChild(chatHeader);

// Adiciona o link <a> ao div "chat-header"
chatHeader.appendChild(linkChat);

// Adiciona o div "chat-window" ao div "chat-content"
chatContent.appendChild(chatWindow);

// Adiciona o div "chat-input" ao div "chat-content"
chatContent.appendChild(chatInput);

// Adiciona o div "chat-content" ao div principal "chatCard"
chatCard.appendChild(chatContent);

// Adiciona o div principal "chatCard" ao corpo do documento HTML
document.body.appendChild(chatCard);

// Carregar a conversa salva do armazenamento local
conversa = carregarConversa();

// Manipulação de esconder, mostar o chat e manipular o texto
var chatCard = document.getElementById("chatCard");
var chatContent = document.querySelector(".chat-content");
var isChatVisible = false;
var estadoChat = 0;
var nome, telefone, assunto;
var conversa = [];
var listaMensagens = document.getElementById("messages");

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

// Função para carregar a conversa do armazenamento local
function carregarConversa() {
  const conversaSalva = localStorage.getItem("conversa");
  return conversaSalva ? JSON.parse(conversaSalva) : [];
}

// Carregar a conversa salva do armazenamento local

conversa = carregarConversa();

if (conversa.length >= 3) {
  listaMensagens.innerHTML += `<li class="list-align-right">${conversa[0]}</li>`;
  listaMensagens.innerHTML += `<li class="list-align-left">Perfeito <b>${conversa[0]}</b>, agora me informe seu telefone?</li>`;
  listaMensagens.innerHTML += `<li class="list-align-right">${conversa[1]}</li>`;
  listaMensagens.innerHTML += `<li class="list-align-left">Ok, o seu telefone é <b>${conversa[1]}</b>. Agora, qual é o assunto?</li>`;
  listaMensagens.innerHTML += `<li class="list-align-right">${conversa[2]}</li>`;
  listaMensagens.innerHTML += `<li class="list-align-left">Entendi, você quer falar sobre <b>${conversa[2]}</b>. Agora vou enviar as suas informações para o nosso sistema.</li>`;
  listaMensagens.innerHTML += `<li class="list-align-left"><b>Para reiniciar sua conversa informe novamente seu nome<b></li>`;
  // Limpar a conversa salva após exibi-la
  // localStorage.removeItem("conversa");
}

// Controle do Chat

// Variável para armazenar a conversa

// Função para salvar a conversa no armazenamento local
function salvarConversa() {
  localStorage.setItem("conversa", JSON.stringify(conversa));
}

document
  .getElementById("chatForm")
  .addEventListener("submit", function (event) {
    localStorage.removeItem("conversa");

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
        listaMensagens.innerHTML = "";
        listaMensagens.innerHTML += `<li class="list-align-right">${nome}</li>`;
        listaMensagens.innerHTML += `<li class="list-align-left">Perfeito <b>${nome}</b>, agora me informe seu telefone?</li>`;
        estadoChat++;
        scrollChatWindow();
        break;
      case 1:
        telefone = inputMensagem.value;
        const validatel = verificarNumeroTelefone(telefone);

        if (validatel) {
          inputMensagem.value = "";
          listaMensagens.innerHTML += `<li class="list-align-right">${telefone}</li>`;
          listaMensagens.innerHTML += `<li class="list-align-left">Ok, o seu telefone é <b>${telefone}</b>. Agora, qual é o assunto?</li>`;
          estadoChat++;
          scrollChatWindow();
          break;
        } else {
          inputMensagem.value = "";
          listaMensagens.innerHTML += `<li class="list-align-right">${telefone}</li>`;
          listaMensagens.innerHTML += `<li class="list-align-left">Desulpe o numero de Telefone <b>${telefone}</b> esta incorreto. ex: 34 9 99999999</li>`;
          scrollChatWindow();
          break;
        }
      case 2:
        assunto = inputMensagem.value;
        inputMensagem.value = "";
        listaMensagens.innerHTML += `<li class="list-align-right">${assunto}</li>`;
        listaMensagens.innerHTML += `<li class="list-align-left">Entendi, você quer falar sobre <b>${assunto}</b>. Agora vou enviar as suas informações para o nosso sistema.</li>`;
        scrollChatWindow();

        // Adicionar as mensagens à conversa
        conversa.push(nome);
        conversa.push(telefone);
        conversa.push(assunto);

        // Salvar a conversa no armazenamento local
        salvarConversa();

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

function verificarNumeroTelefone(numero) {
  // Remova qualquer caractere que não seja dígito
  var numeroLimpo = numero.replace(/\D/g, "");

  // Verifique se o número limpo possui 11 dígitos
  if (numeroLimpo.length === 11) {
    // Verifique se o número começa com um DDD válido (três dígitos) e o nono dígito é 9
    var padrao = /^[1-9]{2}9\d{8}$/;
    return padrao.test(numeroLimpo);
  }

  // Caso contrário, o número não é válido
  return false;
}
