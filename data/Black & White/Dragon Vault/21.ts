import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Kyurem",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],





}

export default card
