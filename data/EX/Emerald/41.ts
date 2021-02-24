import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Swellow",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		277,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Taillow",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skill Dive",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

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
