import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Keldeo",
		fr: "Keldeo",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-Lames",
			},
			effect: {
				en: "During your next turn, this Pokémon's Aqua Blade attack's base damage is 120.",
				fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Hydrolame de ce Pokémon sont de 120.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Blade",
				fr: "Hydrolame",
			},

			damage: 60,

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
