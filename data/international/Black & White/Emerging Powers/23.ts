import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Grass' Power",
				'fr-fr': "Pouvoir Fertilisant",
			},
			effect: {
				'en-us': "If this Pokémon has any Grass Energy attached to it, heal 20 damage from this Pokémon.",
				'fr-fr': "Si de l'Énergie Grass est attachée à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rushing Water",
				'fr-fr': "Courant Fort",
			},
			effect: {
				'en-us': "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The tuft on its head holds water. When the level runs low, it replenishes the tuft by siphoning up water with its tail.",
	},

	thirdParty: {
		cardmarket: 279988,
		tcgplayer: 89218
	}
}

export default card
