import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Farfetch'd",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Smash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
