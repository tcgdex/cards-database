import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Moltres",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Immunity",
			},
			effect: {
				en: "You can't attach Fire Energy cards from your hand to Moltres.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect Fire",
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Tail",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Energy card attached to Moltres.",
			},
			damage: 60,

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
