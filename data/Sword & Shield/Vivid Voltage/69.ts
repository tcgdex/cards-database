import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Duskull",
	},
	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Future Sight",
			},
			effect: {
				en: "Look at the top 4 cards of either player’s deck and put them back in any order.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
