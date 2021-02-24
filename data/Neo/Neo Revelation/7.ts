import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ho-oh",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Stoke",
			},
			effect: {
				en: "You may search your deck for a Energy card and attach it to Ho-oh",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Sacred Fire",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Dive Bomb",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
