import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dhelmise",
		fr: "Sinistrail"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hook",
				fr: "Crochet"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Special Anchor",
				fr: "Ancrage Spécial"
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached, this attack does 60 more damage.",
				fr: "Si de l’Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires."
			},
			damage: "60+",

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
