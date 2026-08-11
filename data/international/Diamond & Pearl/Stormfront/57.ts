import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'de-de': "Wadribie"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		'fr-fr': "Apitrini",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Alert",
				'fr-fr': "Alerte",
				'de-de': "Alarmruf"
			},
			effect: {
				'en-us': "Draw a card. Then, you may switch Combee with 1 of your Benched Pokémon.",
				'fr-fr': "Piochez une carte. Ensuite, vous pouvez échanger Apitrini avec 1 des Pokémon de votre Banc.",
				'de-de': "Ziehe 1 Karte. Danach kannst du Wadribie gegen 1 Pokémon auf deiner Bank austauschen."
			},

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278355,
		tcgplayer: 84394
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
	]
}

export default card
