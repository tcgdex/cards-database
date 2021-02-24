import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Aerodactyl-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 210,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "UnidentifiedFossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Primal Winds",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost {C} more.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
			},

			damage: 120,

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Wild Dive GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 50,

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
