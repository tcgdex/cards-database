import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Lucario"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pulse Blast"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278853,
				tcgplayer: 86879
			},
		}
	]
}

export default card
