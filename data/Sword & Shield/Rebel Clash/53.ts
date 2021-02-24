import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Barraskewda",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Arrokuda",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spiral Jet",
			},
			effect: {
				en: "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing.",
			},
			damage: 130,

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
