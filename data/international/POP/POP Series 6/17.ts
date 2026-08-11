import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Turtwig"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [387],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe"
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
				tcgplayer: 90072,
				cardmarket: 277902
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90072,
				cardmarket: 277902
			},
		},
	],

}

export default card
