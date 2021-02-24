import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Kabutops",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Kabuto",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Hydrocutter",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can't flips more than 3 coins in this way.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
