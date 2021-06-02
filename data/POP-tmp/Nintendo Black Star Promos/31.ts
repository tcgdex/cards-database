import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Moltres ex",
	},
	illustrator: "Ken Ikuji",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synchronized Lift",
			},
			effect: {
				en: "As long as you have Articuno ex and Zapdos ex in play, the Retreat Cost for Moltres ex is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Gift",
			},
			effect: {
				en: "You may move a Fire Energy card attached to Moltres ex to 1 of your Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Scorching Wing",
			},
			effect: {
				en: "Discard all Fire Energy attached to Moltres ex.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
