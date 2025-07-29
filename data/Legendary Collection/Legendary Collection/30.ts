import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Moltres",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 70,

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
				en: "Wildfire",
			},
			effect: {
				en: "You may discard any number of R Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
			},

		},
		{
			cost: [
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274795
	}
}

export default card
