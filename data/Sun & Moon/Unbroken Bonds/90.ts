import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		104,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
			},
			effect: {
				en: "During your next turn, this Pokémon's Beat attack's base damage is 80.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Bataille de ce Pokémon sont de 80.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
