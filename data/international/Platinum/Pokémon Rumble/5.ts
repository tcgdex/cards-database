import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Starmie"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [121],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Staryu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Starmie."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278846,
				tcgplayer: 87775
			},
		}
	]
}

export default card
