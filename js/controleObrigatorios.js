var forms = document.getElementsByClassName("formObrigatoriedades");

for (var i = 0; i < forms.length; i++) {
  forms[i].onsubmit = function (e) {
    e.preventDefault();

    var checkboxes = this.querySelectorAll('input[type="checkbox"]:checked'); //Pega os checkox que estão marcados
    var count = checkboxes.length;
    var message = "";

    if (count >= 1 && count <= 2) {
      message =
        "Os primeiros passos estão dados, mas acho bom dar uma corrida pra tentar completar os outros pontos !";
    } else if (count >= 3 && count <= 4) {
      message =
        "Ótimo trabalho! Você já fez uma boa parte do projeto. Falta pouco!!";
    } else if (count > 4) {
      message = "Parabéns! Você concluiu todas as etapas obrigatóriass!";
    } else {
      message = "Você não marcou nenhum item!";
    }

    alert(message); // O alert emite a mensagem no navegador
  };
}

// Formulário de contato

const numWhatsapp = "5511911403617";

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeAluno").value;
  const diaSemana = document.getElementById("DiaSemanaSelecionado").value;
  const mensagem = document.getElementById("mensagem").value;

  const mensagemCompleta =
    `*NOVO CONTATO - YourCode*\n\n` +
    `*De:* ${nome}\n` +
    `*Dia de Aula:* ${diaSemana.toUpperCase()}\n\n` +
    `*Mensagem/Assunto:*\n${mensagem}`;

  const mensagemCodificada = encodeURIComponent(mensagemCompleta);

  const linkWhatsapp = `https://wa.me/${numWhatsapp}?text=${mensagemCodificada}`;
  window.open(linkWhatsapp, "_blank");
});
