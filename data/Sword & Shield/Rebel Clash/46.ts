import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Seismitoad",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Palpitoad",
	},



	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Split Spiral Punch",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Resonance",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 120 more damage.",
			},
			damage: "120+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
