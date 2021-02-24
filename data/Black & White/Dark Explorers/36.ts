import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Swanna",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		581,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Ducklett",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Pirouette",
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Incessant Peck",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
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
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
