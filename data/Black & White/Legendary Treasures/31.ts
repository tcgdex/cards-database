import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Gyarados",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Howling Rampage",
			},
			effect: {
				en: "Does 20 damage times the number of Prize cards both players have taken.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
