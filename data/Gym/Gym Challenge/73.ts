import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Magikarp",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ancestral Memory",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Giovanni's Magikarp stays in play (even putting Giovanni's Magikarp on the Bench won't let you use it again).",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Flail Around",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274341
	}
}

export default card
