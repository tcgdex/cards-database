import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Power Charge",
		fr: "Charge d'intensité",
		de: "Energieaufladung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, mélangez 2 cartes Énergie de votre pile de défausse à votre deck (1 seule si vous n'en avez qu'une).",
		de: "Wirf eine Münze. Mische bei 'Kopf' 2 Energiekarten aus deinem Ablagestapel in dein Deck (1, wenn du nur 1 hast)."
	},

	thirdParty: {
		cardmarket: 275022,
		tcgplayer: 88353
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
