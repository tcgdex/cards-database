import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Rayquaza δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 90,
	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Guard",
			},
			effect: {
				en: "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Blow",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Rayquaza.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
			},
			effect: {
				en: "Put 7 damage counters on Rayquaza.",
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
