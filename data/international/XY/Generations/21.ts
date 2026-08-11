import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
	},

	thirdParty: {
		cardmarket: 288461,
		tcgplayer: 113679
	}
}

export default card
