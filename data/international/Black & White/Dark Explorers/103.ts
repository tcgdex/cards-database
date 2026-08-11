import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Entei-EX",
		'fr-fr': "Entei-EX",
		'es-es': "Entei-EX",
		'it-it': "Entei-EX",
		'pt-br': "Entei-EX",
		'de-de': "Entei-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Grand Flame",
				'fr-fr': "Flamme Colossale"
			},
			effect: {
				'en-us': "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie  de votre pile de défausse à 1 de vos Pokémon de Banc."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3
}

export default card
