import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
		de: "Wadribie"
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
		fr: "Apitrini",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Alert",
				fr: "Alerte",
				de: "Alarmruf"
			},
			effect: {
				en: "Draw a card. Then, you may switch Combee with 1 of your Benched Pokémon.",
				fr: "Piochez une carte. Ensuite, vous pouvez échanger Apitrini avec 1 des Pokémon de votre Banc.",
				de: "Ziehe 1 Karte. Danach kannst du Wadribie gegen 1 Pokémon auf deiner Bank austauschen."
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



}

export default card
