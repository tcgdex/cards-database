import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Golem EX",
		'fr-fr': "Grolem-EX",
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Boulder Crush",
				'fr-fr': "Rocher Écrasant",
			},

			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Fall",
				'fr-fr': "Chute Mégatonne",
			},
			effect: {
				'en-us': "This Pokémon does 60 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 60 dégâts.",
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 288484,
		tcgplayer: 113704
	}
}

export default card
