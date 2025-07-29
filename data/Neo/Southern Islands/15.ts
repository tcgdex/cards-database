import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Wartortle",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Squirtle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Water Energy attached to Wartortle but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275645
	}
}

export default card
