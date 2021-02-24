import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Golem",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Graveler",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Avalanche",
			},

			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Selfdestruct",
			},
			effect: {
				en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Golem does 100 damage to itself.",
			},
			damage: 100,

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
