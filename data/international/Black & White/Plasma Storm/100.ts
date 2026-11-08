import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'es-es': "Dodrio",
		'it-it': "Dodrio",
		'pt-br': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Raging Pecks",
				'fr-fr': "Bec Enragé",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. This Pokémon is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck",
				'fr-fr': "Bec Vrille",
			},

			damage: 60,

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
		'en-us': "When Doduo evolves into this odd breed, one of its heads splits into two. It runs at nearly 40 mph.",
	},

	thirdParty: {
		cardmarket: 280840,
		tcgplayer: 84855
	}
}

export default card
