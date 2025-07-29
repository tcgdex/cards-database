import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Omastar",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Cannon",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274823
	}
}

export default card
