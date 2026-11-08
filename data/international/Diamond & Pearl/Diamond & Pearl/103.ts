import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'de-de': "Chelast"
	},

	illustrator: "Ken Sugimori",
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
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
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

	retreat: 2,

	description: {
		'en-us': "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.",
		'fr-fr': "La coquille sur son dos est faite de terre. Elle durcit lorsqu'il s'abreuve. Il vit le long des lacs."
	},

	thirdParty: {
		cardmarket: 277602,
		tcgplayer: 90071
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"]
		},
		{
			type: "reverse",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["pokemon-day"]
		},
		{
			type: "normal",
			stamp: ["distributor-meeting"]
		}
	]
}

export default card
