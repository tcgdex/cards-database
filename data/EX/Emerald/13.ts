import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Glalie",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hailstone",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Slash",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
