import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Skorupi",
		fr: "Rapion",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		451,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hone Claws",
				fr: "Aiguisage",
			},
			effect: {
				en: "During your next turn, this Pokémon's Pierce attack's base damage is 90.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Transpercement de ce Pokémon sont de 90.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
