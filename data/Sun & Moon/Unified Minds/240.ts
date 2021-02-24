import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Keldeo-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 170,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pure Heart",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-GX or Pokémon-EX.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sonic Edge",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			},
			damage: 110,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Resolute Blade GX",
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
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
