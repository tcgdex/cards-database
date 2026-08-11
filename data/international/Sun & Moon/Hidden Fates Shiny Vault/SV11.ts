import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
	},
	illustrator: "sui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		656,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Frubbles",
				'fr-fr': "Grebulles",
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				'fr-fr': "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
			},

			damage: 20,

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
		'en-us': "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
	},
}

export default card
