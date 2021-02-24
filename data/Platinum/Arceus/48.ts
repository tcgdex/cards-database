import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Shelgon",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],

	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrunch",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shelgon by attacks during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Bump",
			},
			effect: {
				en: "If Shelgon has any basic Fire Energy and any basic Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
