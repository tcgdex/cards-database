import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Promo",
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

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Justified",
				'fr-fr': "Cœur Noble"
			},
			effect: {
				'en-us': "This Pokémon's attacks do 50 more damage to your opponent's Darkness Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de ce Pokémon infligent 50 dégâts supplémentaires aux Pokémon  de votre adversaire (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Sacred Sword",
				'fr-fr': "Lame Sainte"
			},
			effect: {
				'en-us': "This Pokémon can't use Sacred Sword during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour."
			},
			damage: 100,

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
		'en-us': "When it is resolute, it body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
	},

	thirdParty: {
		cardmarket: 293189
	}
}

export default card
