import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Lairon",
		'fr-fr': "Galegon de la Team Magma",
		'pt-br': "Lairon da Equipe Magma",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Team Magma's Aron",
		'fr-fr': "Galekid de la Team Magma",
		'pt-br': "Aron da Equipe Magma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'pt-br': "Roída",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'pt-br': "Desmantelar",
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'pt-br': "Esse Pokémon causa 10 de danos a ele mesmo.",
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

	retreat: 3,

	description: {
		'en-us': "When Lairon uses Take Down, the impact from its solid body is enough to destroy concrete!",
	},

	thirdParty: {
		cardmarket: 282524,
		tcgplayer: 97059
	}
}

export default card
