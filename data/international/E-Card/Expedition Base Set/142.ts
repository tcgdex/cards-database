import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Mary's Impulse",
		'fr-fr': "Impulsion de Lula",
		'de-de': "Mary's Impulse*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip a coin until you get tails. For each heads, draw 2 cards.",
		'fr-fr': "Lancez une pièce jusqu'à obtenir pile. Pour chaque face, piochez 2 cartes.",
		'de-de': "Flip a coin until you get tails. For each heads, draw 2 cards.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87242,
				cardmarket: 275017
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87242,
				cardmarket: 275017
			},
		},
	],
	types: [
		"Darkness"
	],
}

export default card
