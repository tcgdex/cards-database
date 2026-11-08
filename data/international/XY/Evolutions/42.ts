import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'es-es': "Zapdos",
		'it-it': "Zapdos",
		'pt-br': "Zapdos",
		'de-de': "Zapdos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Fatal-Foudre",
				'es-es': "Trueno",
				'it-it': "Tuono",
				'pt-br': "Trovão",
				'de-de': "Donner"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Esse Pokémon causa 30 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 90,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
				'es-es': "Rayo",
				'it-it': "Fulmine",
				'pt-br': "Relâmpago",
				'de-de': "Donnerblitz"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
				'es-es': "Descarta todas las Energías unidas a este Pokémon.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia ligada a este Pokémon.",
				'de-de': "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 170,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "One of the legendary bird Pokémon. While it is flying, it makes crackling and snapping sounds.",
	},

	thirdParty: {
		cardmarket: 293425,
		tcgplayer: 124055
	}
}

export default card
