import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Solrock",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		338,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sunbeam",
			},
			effect: {
				en: "The maximum HP for each Lunatone you have in play is now 80.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scorching Light",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Reflected Beam",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon for each Lunatone you have in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

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
