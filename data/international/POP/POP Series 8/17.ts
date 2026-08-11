import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Turtwig",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	description: {
		'en-us': "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes."
	},

	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278418,
				tcgplayer: 90076
			}
		},
	],
}

export default card
