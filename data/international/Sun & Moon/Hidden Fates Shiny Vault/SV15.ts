import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Seviper",
		'fr-fr': "Séviper",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "More Poison",
				'fr-fr': "Poison Sans Fin",
			},
			effect: {
				'en-us': "Put 1 more damage counter on your opponent's Poisoned Pokémon between turns.",
				'fr-fr': "Placez 1 marqueur de dégâts supplémentaire sur le Pokémon Empoisonné de votre adversaire entre chaque tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venomous Fang",
				'fr-fr': "Croc-Poison",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
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




	description: {
		'en-us': "In battle, it uses its bladed tail to counter any Zangoose. It secretes a deadly venom in its tail.",
	},
}

export default card
