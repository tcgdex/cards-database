import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Eelektrik",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Tynamo",
	},



	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Shocking Smash",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
