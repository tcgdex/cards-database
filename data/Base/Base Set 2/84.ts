import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Onix",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Throw",
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Harden",
			},
			effect: {
				en: "During opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		en: "As it grows, the stone portions of its body harden to become similar to a diamond, though colored black.",
	},

	thirdParty: {
		cardmarket: 274007,
		tcgplayer: 42535
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
