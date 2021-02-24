import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 200,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
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
				en: "Heavy Impact",
				fr: "Gros Impact",
			},

			damage: 90,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
			},

			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
