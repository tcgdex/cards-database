import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy"
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fighting",
	],




	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Stampede",
				fr: "Ruée"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Strike Back",
				fr: "Vengeur"
			},
			effect: {
				en: "This attack does 30 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
