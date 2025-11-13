import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Zapdos",
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plasma",
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electroburn",
			},
			effect: {
				en: "Rocket's Zapdos does damage to itself equal to 10 times the number of Energy cards attached to it.",
			},
			damage: 70,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274283,
		tcgplayer: 88800
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		},
	]
}

export default card
