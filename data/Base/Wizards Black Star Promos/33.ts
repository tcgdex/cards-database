import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Scizor",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Scizor during your opponent's next turn. (Benching either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Pincer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage plus 10 more damage for each heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
