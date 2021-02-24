import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Wishiwashi",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 30,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deep Sea Swirl",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 8 cards.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
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

	retreat: 1,



}

export default card
