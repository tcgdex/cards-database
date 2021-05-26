import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bewear",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Stufful",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Throw",
			},
			effect: {
				en: "Flip a coin. If heads, discard your opponent’s Active Pokémon and all attached cards.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
