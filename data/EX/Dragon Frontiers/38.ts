import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Shelgon δ",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
			},
			effect: {
				en: "Shelgon does 10 damage to itself.",
			},
			damage: 50,

		},
	],






}

export default card
