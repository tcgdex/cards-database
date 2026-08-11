import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Stab",
				'fr-fr': "Entaille Double",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doduo Delivery",
				'fr-fr': "Livraison Doduo",
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The brains in its two heads appear to communicate emotions to each other with a telepathic power.",
	},

	thirdParty: {
		cardmarket: 288493,
		tcgplayer: 113713
	}
}

export default card
