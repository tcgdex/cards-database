import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Pidgeot",
	},
	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		18,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgeotto",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic Flight",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slicing Wind",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
