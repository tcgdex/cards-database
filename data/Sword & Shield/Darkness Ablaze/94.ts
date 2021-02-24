import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hippowdon",
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Hippopotas",
	},



	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
			},
			effect: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
			},
			damage: "80×",

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Land Crush",
			},

			damage: 150,

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
