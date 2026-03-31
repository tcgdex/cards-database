import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Hole-Digging Shovel",
		fr: "Pelle à Creuser des Trous",
		es: "Pala Cavahoyos",
		de: "Buddelschaufel",
		it: "Pala Scavabuche",
		pt: "Pá de Cavar"
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",
	illustrator: "Toyste Beach",
	effect: {
		en: "Discard the top 2 cards of your deck.",
		fr: "Défaussez les 2 cartes du dessus de votre deck.",
		es: "Descarta las 2 primeras cartas de tu baraja.",
		de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel.",
		it: "Scarta le prime due carte del tuo mazzo.",
		pt: "Descarte as 2 cartas de cima do seu baralho."
	},
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
