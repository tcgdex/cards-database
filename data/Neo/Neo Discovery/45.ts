import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Pupitar",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Larvitar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Dust Devil",
			},
			effect: {
				en: "Does 10 damage to each non- Pokémon in play. Don't apply Weakness and Resistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
