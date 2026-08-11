import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo",
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
				'en-us': "Swords Dance",
				'fr-fr': "Danse-Lames",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Aqua Blade attack's base damage is 120.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l'attaque Hydrolame de ce Pokémon sont de 120.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Blade",
				'fr-fr': "Hydrolame",
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




	description: {
		'en-us': "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
	},
}

export default card
