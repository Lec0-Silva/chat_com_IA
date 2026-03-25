function enviarMensagem() {
  const input = document.getElementById("entrada");
  const chat = document.getElementById("chat");

  const mensagem = input.value;

  if (mensagem === "") return;

  chat.innerHTML += `<p><b>Você:</b> ${mensagem}</p>`;

  input.value = "";
}
