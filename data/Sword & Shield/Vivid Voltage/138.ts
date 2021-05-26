import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Rayquaza",
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Colorless",
	],




	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Fighting",
			],
			name: {
				en: "Amazing Burst",
			},
			effect: {
				en: "Discard all basic Energy from this Pokémon. This attack does 80 damage for each type of basic Energy you discarded in this way.",
			},
			damage: "80×",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
