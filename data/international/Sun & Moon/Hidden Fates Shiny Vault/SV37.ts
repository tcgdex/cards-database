import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
	},
	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fight Song",
				'fr-fr': "Hymne au Combat",
			},
			effect: {
				'en-us': "Your Dragon Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
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
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
	},
}

export default card
