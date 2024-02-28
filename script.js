let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
  },
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/*
Há repetição nas funções goTown e goStore do meu código e em geral a presença de repetição é um sinal de que você pode refatorar o código e criar outra função para evitar a duplicação.

Repetição:

Ambas as funções (goTown e goStore) realizam tarefas similares relacionadas à atualização dos textos e eventos das três opções de botão.
Especificamente, elas atualizam o texto do botão 1, 2 e 3, definindo os eventos onclick para cada um e atualizando o texto principal.
Refatoração:

Por isso foi criado uma nova função(function update(location)), para encapsular a lógica repetida de atualização dos botões e texto, tornando o código mais limpo e modular. 
*/

//Função para encapsular a logica das funções goTown e goStore
function update(location) {}

function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText =
    'You are in the town square. You see a sign that says "Store".';
}

function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {}

function buyWeapon() {}
