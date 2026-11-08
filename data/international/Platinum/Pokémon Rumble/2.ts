import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Cherrim"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [421],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Cherubi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278843,
				tcgplayer: 84256
			}
		}
	]
}

export default card
