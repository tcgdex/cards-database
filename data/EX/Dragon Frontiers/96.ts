import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Latios ex δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
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
				en: "Link Wing",
			},
			effect: {
				en: "The Retreat Cost for each of your Latias, Latias ex, Latios, and Latios ex is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Barrier",
			},
			effect: {
				en: "Prevent all effects of an attack, including damage, done to Latios ex by your opponent's Pokémon-ex during your opponent's next turn.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
