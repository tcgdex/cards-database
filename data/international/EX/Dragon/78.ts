import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'de-de': "Knacklion"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [328],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dig",
				'fr-fr': "Tunnel",
				'de-de': "Schaufler"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90019,
				cardmarket: 275955
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90019,
				cardmarket: 275955
			},
		},
	],

}

export default card
