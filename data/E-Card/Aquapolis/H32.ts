import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Zapdos",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anti",
			},
			effect: {
				en: "Lightning - You can't attach Lightning Energy cards to Zapdos from your hand to Zapdos.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plasma",
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads attach 1 of them to Zapdos.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
			},
			effect: {
				en: "Flip a coin. If tails, put 2 damage counters on Zapdos.",
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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
