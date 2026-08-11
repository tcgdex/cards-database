import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tentacool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tentacle Grip",
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Poison Sting",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tentacle Grip",
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Poison Sting",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This Pokémon attacks its prey with its eighty toxin-producing tentacles.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275640,
				tcgplayer: 46467
			}
		}
	]
}

export default card
