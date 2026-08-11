import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'de-de': "Golbat"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Super Poison Breath",
				'fr-fr': "Super haleine empoisonnée",
				'de-de': "Super Poison Breath"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Poisoned.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Each Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Signal",
				'fr-fr': "Signal ultrason",
				'de-de': "Sonic Signal"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque leur inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 2 of your opponent's Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276806,
		tcgplayer: 85795
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

