import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hole-Digging Shovel",
		fr: "Pelle à Creuser des Trous",
		es: "Pala Cavahoyos",
		'es-mx': "Pala Cavahoyos",
		de: "Buddelschaufel",
		it: "Pala Scavabuche",
		pt: "Pá de Cavar"
	},

	illustrator: "Toyste Beach",
	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Discard the top 2 cards of your deck.",
		fr: "Défaussez les 2 cartes du dessus de votre deck.",
		es: "Descarta las 2 primeras cartas de tu baraja.",
		'es-mx': "Descarta las primeras 2 cartas de tu mazo.",
		de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel.",
		it: "Scarta le prime due carte del tuo mazzo.",
		pt: "Descarte as 2 cartas de cima do seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684330,
		cardmarket: 877490
	}
}

export default card
