import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Mime Jr.",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		439,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr..",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mime",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
