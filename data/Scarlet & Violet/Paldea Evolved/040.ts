import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [1004],
	set: Set,

	name: {
		fr: "Yuyu-ex",
		en: "Chi-Yu ex",
		es: "Chi-Yu ex",
		it: "Chi-Yu-ex",
		pt: "Chi-Yu ex",
		de: "Yuyu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Jalousement Roussi",
			en: "Jealously Singe",
			es: "Quemadura Envidiosa",
			it: "Scottata Invidiosa",
			pt: "Queimar de Inveja",
			de: "Brennender Neid"
		},

		effect: {
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			en: "Discard the top 2 cards of your opponent's deck.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Déferlante Enflammée",
			en: "Flame Surge",
			es: "Oleada de Llamas",
			it: "Ondata Fiammante",
			pt: "Ímpeto Flamejante",
			de: "Flammenwoge"
		},

		effect: {
			fr: "Choisissez jusqu'à 3 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Énergie {R} de base, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			en: "Choose up to 3 of your Benched Pokémon. For each of those Pokémon, search your deck for a Basic {R} Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			es: "Elige hasta 3 de tus Pokémon en Banca. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía {R} Básica y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Scegli fino a tre dei tuoi Pokémon in panchina. Per ognuno di essi, cerca nel tuo mazzo una carta Energia base {R} e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Escolha até 3 dos seus Pokémon no Banco. Para cada um daqueles Pokémon, procure por uma carta de Energia {R} Básica no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Wähle bis zu 3 Pokémon auf deiner Bank. Durchsuche für jedes jener Pokémon dein Deck nach 1 Basis-{R}-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics"
}

export default card