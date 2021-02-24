import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Flareon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 50,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rage",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Dark Flareon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Playing with Fire",
			},
			effect: {
				en: "Use this attack only if there are any Energy cards attached to Dark Flareon. Flip a coin. If heads, discard 1 of those Energy cards and this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage.",
			},
			damage: 30,

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
