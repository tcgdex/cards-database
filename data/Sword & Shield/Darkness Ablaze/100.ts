import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Grimer",
	},
	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Darkness",
	],




	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Stomp Off",
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Whirlpool",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
