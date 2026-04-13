const nomeElemento = document.getElementById("nome-aluno");
const pontosPerfil = document.getElementById("pontos-perfil");
const atividadesPerfil = document.getElementById("atividades-perfil");

// pega dados salvos
const nome = localStorage.getItem("nomeAluno") || "Alexandre Rocha";
const pontos = localStorage.getItem("participacoes") || 0;
const atividades = localStorage.getItem("concluidos") || 0;

// joga na tela
nomeElemento.textContent = nome;
pontosPerfil.textContent = pontos;
atividadesPerfil.textContent = atividades;