import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Vulpix",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Call Will-o'-the-wisp",
			},
			effect: {
				en: "Flip 3 coins. For each heads, if you have a Energy card in your discard pile, put it into your hand.",
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274334
	}
}

export default card
