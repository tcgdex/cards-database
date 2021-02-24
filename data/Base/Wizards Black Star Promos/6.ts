import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Arcanine",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flames of Rage",
			},
			effect: {
				en: "Discard 2 Energy cards attached to Arcanine in order to use this attack. This attack does 40 damage plus 10 more damage for each damage counter on Arcanine.",
			},
			damage: 40,

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
