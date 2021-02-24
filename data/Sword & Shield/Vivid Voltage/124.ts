import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Ferrothorn",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ferroseed",
	},



	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Swift Swing",
			},
			effect: {
				en: "This attack does 30 damage for each Metal Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: "30×",

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
	retreat: 3,



}

export default card
