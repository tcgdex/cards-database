import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Spiritomb",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sealing Scream",
			},
			effect: {
				en: "Each player can't play any ACE SPEC cards from his or her hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hexed Mirror",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
			},

		},
	],






}

export default card
