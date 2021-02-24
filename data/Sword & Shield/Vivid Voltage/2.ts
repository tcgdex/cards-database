import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Kakuna",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shed Skin",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Bite",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
