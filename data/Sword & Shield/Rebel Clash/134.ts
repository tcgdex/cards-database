import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Doublade",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Honedge",
	},



	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Double Slash",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage for each heads.",
			},
			damage: "80×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
