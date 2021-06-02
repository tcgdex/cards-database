import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Articuno ex",
	},
	illustrator: "Nakaoka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synchronized Lift",
			},
			effect: {
				en: "As long as you have Zapdos ex and Moltres ex in play, the Retreat Cost for Articuno ex is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ice Gift",
			},
			effect: {
				en: "You may move a Water Energy card attached to Articuno ex to 1 of your Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Freezing Wing",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			},
			damage: 50,

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
