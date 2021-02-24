import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magby",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		240,
	],
	hp: 30,
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
				en: "Energy Catch",
			},
			effect: {
				en: "Flip a coin. If heads, put a basic Energy cards from your discard pile into your hand.",
			},

		},
	],






}

export default card
