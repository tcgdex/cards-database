import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shed Skin",
				'fr-fr': "Mue",
				'es-es': "Mudar",
				'it-it': "Muta",
				'pt-br': "Pele Vertente",
				'de-de': "Expidermis"
			},
			effect: {
				'en-us': "Heal 40 damage from this Pokémon.",
				'fr-fr': "Soignez 40 dégâts à ce Pokémon.",
				'es-es': "Cura 40 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 40 danni.",
				'pt-br': "Cure 40 pontos de dano deste Pokémon.",
				'de-de': "Heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its shell is filled with its soft innards. It doesn't move much because of the risk it might carelessly spill its innards out.",
	},

	thirdParty: {
		cardmarket: 299409,
		tcgplayer: 138272
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
