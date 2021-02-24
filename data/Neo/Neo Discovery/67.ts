import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [E]",
	},
	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
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
				en: "[Engage]",
			},
			effect: {
				en: "When you play Unown E from your hand, your opponent may shuffle his or her hand into his or her deck and then draw 4 cards. Either way, you may shuffle your hand into your deck and draw 4 cards.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
