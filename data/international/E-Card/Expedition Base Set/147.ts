import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Power Charge",
		'fr-fr': "Charge d'intensité",
		'de-de': "Energieaufladung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, shuffle 2 Energy cards from your discard pile into your deck (1 if you have only 1).",
		'fr-fr': "Lancez une pièce. Si c'est face, mélangez 2 cartes Énergie de votre pile de défausse à votre deck (1 seule si vous n'en avez qu'une).",
		'de-de': "Wirf eine Münze. Mische bei 'Kopf' 2 Energiekarten aus deinem Ablagestapel in dein Deck (1, wenn du nur 1 hast)."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88353,
				cardmarket: 275022
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88353,
				cardmarket: 275022
			},
		},
	],
}

export default card
