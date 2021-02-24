import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Heliolisk",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Helioptile",
	},



	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Eerie Impulse",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
