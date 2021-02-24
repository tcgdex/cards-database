import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Jynx",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
			},
			effect: {
				en: "As long as Jynx is an Evolved Pokémon, prevent all effects of opponent's attacks, except damage, done to Jynx, and Jynx has no Weakness.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Freeze Light",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned.",
			},

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pure Power",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			},

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
