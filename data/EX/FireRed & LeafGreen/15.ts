import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Snorlax",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rest Up",
			},
			effect: {
				en: "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collapse",
			},
			effect: {
				en: "Snorlax is now asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss and Turn",
			},
			effect: {
				en: "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
