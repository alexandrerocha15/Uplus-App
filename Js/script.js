let participacoes = 0;
let concluidos = 0;
const totalAtividades = 4;

const respostasAula = {
  entendi: 0,
  medio: 0,
  duvida: 0,
  "nao-entendi": 0
};

const pontosElemento = document.getElementById("pontos");
const concluidosElemento = document.getElementById("concluidos");
const porcentagemElemento = document.getElementById("porcentagem");
const barraPreenchimento = document.getElementById("barra-preenchimento");

const valorEntendi = document.getElementById("valor-entendi");
const valorMedio = document.getElementById("valor-medio");
const valorDuvida = document.getElementById("valor-duvida");
const valorNaoEntendi = document.getElementById("valor-nao-entendi");

const barraEntendi = document.getElementById("barra-entendi");
const barraMedio = document.getElementById("barra-medio");
const barraDuvida = document.getElementById("barra-duvida");
const barraNaoEntendi = document.getElementById("barra-nao-entendi");

const botoesConcluir = document.querySelectorAll(".btn-concluir");
const botoesFeedback = document.querySelectorAll(".btn-feedback");
const mensagemFeedbackAula = document.getElementById("mensagem-feedback-aula");

function atualizarPainelAluno() {
  pontosElemento.textContent = participacoes;
  concluidosElemento.textContent = concluidos;

  const progresso = Math.round((concluidos / totalAtividades) * 100);
  porcentagemElemento.textContent = `${progresso}%`;
  barraPreenchimento.style.width = `${progresso}%`;
}

function atualizarRelatorioProfessor() {
  valorEntendi.textContent = respostasAula.entendi;
  valorMedio.textContent = respostasAula.medio;
  valorDuvida.textContent = respostasAula.duvida;
  valorNaoEntendi.textContent = respostasAula["nao-entendi"];

  const totalRespostas =
    respostasAula.entendi +
    respostasAula.medio +
    respostasAula.duvida +
    respostasAula["nao-entendi"];

  if (totalRespostas === 0) {
    barraEntendi.style.width = "0%";
    barraMedio.style.width = "0%";
    barraDuvida.style.width = "0%";
    barraNaoEntendi.style.width = "0%";
    return;
  }

  barraEntendi.style.width = `${(respostasAula.entendi / totalRespostas) * 100}%`;
  barraMedio.style.width = `${(respostasAula.medio / totalRespostas) * 100}%`;
  barraDuvida.style.width = `${(respostasAula.duvida / totalRespostas) * 100}%`;
  barraNaoEntendi.style.width = `${(respostasAula["nao-entendi"] / totalRespostas) * 100}%`;
}

botoesConcluir.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (botao.dataset.concluido === "true") return;

    const valor = Number(botao.dataset.pontos);

    participacoes += valor;
    concluidos += 1;

    botao.textContent = "Participação registrada";
    botao.disabled = true;
    botao.style.opacity = "0.7";
    botao.dataset.concluido = "true";

    atualizarPainelAluno();
  });
});

botoesFeedback.forEach((botao) => {
  botao.addEventListener("click", () => {
    const tipo = botao.dataset.tipo;
    respostasAula[tipo]++;

    mensagemFeedbackAula.textContent =
      "Retorno enviado com sucesso. Obrigado por contribuir com a aula.";

    atualizarRelatorioProfessor();
  });
});

atualizarPainelAluno();
atualizarRelatorioProfessor();

// salva dados no navegador
localStorage.setItem("participacoes", participacoes);
localStorage.setItem("concluidos", concluidos);
localStorage.setItem("nomeAluno", "Alexandre Rocha");