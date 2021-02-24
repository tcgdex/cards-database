import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Entei ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 100,
	types: [
		"Darkness",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Condition",
			},
			effect: {
				en: "As long as Rocket's Entei ex has any Darkness Energy attached to it, Rocket's Entei ex has no Weakness.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Link",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Rocket's Entei ex.",
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
				en: "Volcanic Ash",
			},
			effect: {
				en: "Discard 2 Energy attached to Rocket's Entei ex and then choose 1 of your opponent's Pok��mon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

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
