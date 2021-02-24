import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Vulpix",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Confuse Ray",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
