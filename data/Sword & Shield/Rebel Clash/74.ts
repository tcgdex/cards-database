import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Clefairy",
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shining Fingers",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Magical Shot",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
