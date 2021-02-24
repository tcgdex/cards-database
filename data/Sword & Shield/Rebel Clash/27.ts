import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Growlithe",
	},
	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Odor Sleuth",
			},
			effect: {
				en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Claws",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
