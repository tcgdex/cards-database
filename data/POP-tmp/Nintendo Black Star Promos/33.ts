import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Zapdos ex",
	},
	illustrator: "K. Hoshiba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 100,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synchronized Lift",
			},
			effect: {
				en: "As long as you have Articuno ex and Moltres ex in play, the Retreat Cost for Zapdos ex is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thunder Gift",
			},
			effect: {
				en: "You may move a Lightning Energy card attached to Zapdos ex to 1 of your Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Wing",
			},
			effect: {
				en: "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
