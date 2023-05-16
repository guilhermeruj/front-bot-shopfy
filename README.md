# Chat Card HTML/CSS

Este é um código HTML/CSS para uma interface de cartão de chat. O código cria uma janela de chat que pode ser exibida ou ocultada ao alternar. Os usuários podem digitar seu nome, número de telefone e assunto, e as informações são enviadas para um servidor usando uma solicitação POST.

## Uso

Para usar este código, siga estas etapas:

1. Copie o código HTML e salve-o em um arquivo HTML (por exemplo, `index.html`).
2. Abra o arquivo HTML em um navegador da web.

## Dependências

Este código depende dos seguintes recursos externos:

- [Bootstrap Icons](https://icons.getbootstrap.com/) - Arquivo CSS para ícones.
- [Google Fonts - Helvetica](https://fonts.google.com/specimen/Helvetica) - Arquivo CSS para a fonte Helvetica.
- [Bootstrap Icons](https://icons.getbootstrap.com/) (novamente) - Arquivo CSS para ícones (usado duas vezes).

Certifique-se de ter uma conexão com a Internet para que o código possa buscar esses recursos.

## Estrutura

O código está estruturado da seguinte maneira:

- O arquivo HTML começa com a declaração `<!DOCTYPE html>` e define a estrutura HTML.
- A seção `<head>` contém as tags `<meta>` necessárias e inclui arquivos CSS externos para estilização.
- A seção `<body>` contém a interface do cartão de chat.
  - O cartão de chat é representado por um elemento `<div>` com a classe `card`.
  - O conteúdo do chat é contido em um elemento `<div>` com a classe `chat-content`.
  - A janela do chat, onde as mensagens são exibidas, é um elemento `<div>` com a classe `chat-window`.
  - O formulário de entrada de mensagem é contido em um elemento `<div>` com a classe `chat-input`.
  - O código JavaScript é incluído no final da seção `<body>`.

## Estilização

Os estilos CSS definidos na seção `<style>` do código são responsáveis pela aparência visual do cartão de chat. Os estilos definem o layout, cores, fontes e animações usadas na interface.

## JavaScript

O código JavaScript no final do arquivo fornece a funcionalidade para o cartão de chat. Ele permite que o usuário alterne a visibilidade da janela de chat ao clicar no cabeçalho do chat. O código também lida com a entrada do usuário e envia as informações coletadas para um servidor usando uma solicitação POST. A resposta do servidor é exibida na janela de chat.

Observe que o código inclui uma solicitação fetch para uma URL específica (`http://localhost:3030/api/chats`) para enviar as informações coletadas. Certifique-se de modificar esta URL para corresponder ao endpoint do seu servidor.

## Conclusão

Este README fornece uma visão geral do código HTML/CSS para uma interface de cartão de chat. O código permite que os usuários interajam com uma janela de chat, insiram suas informações e as enviem para um servidor. O código JavaScript fornecido lida com a funcionalidade do cartão de chat. Sinta-se à vontade para personalizar e modificar o código para atender às suas necessidades específicas.
