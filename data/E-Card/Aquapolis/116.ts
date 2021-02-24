import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Vulpix",
	},
	illustrator: "Keiko Fukuyama",
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
				"Fire",
			],
			name: {
				en: "Collect Fire",
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Vulpix.",
			},
			damage: 10,

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
