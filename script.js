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

const weapons = [
  {
    name: "stick",
    power: 5,
  },

  {
    name: "dagger",
    power: 30,
  },

  {
    name: "claw hammer",
    power: 50,
  },

  {
    name: "sword",
    power: 100,
  },
];

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button function": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },

  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },

  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
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
function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button function"][0];
  button2.onclick = location["button function"][1];
  button3.onclick = location["button function"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon += 1;
  }
}

function fightSlime() {}

function fightBeast() {}
