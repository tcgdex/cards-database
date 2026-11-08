import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'es-es': "Nincada",
		'it-it': "Nincada",
		'pt-br': "Nincada",
		'de-de': "Nincada"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		290,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slight Intrusion",
				'fr-fr': "Légère Intrusion",
				'es-es': "Ligera Intromisión",
				'it-it': "Coinvolgimento",
				'pt-br': "Leve Invasão",
				'de-de': "Vorwagen"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can sometimes live underground for more than 10 years. It absorbs nutrients from the roots of trees.",
	},

	thirdParty: {
		cardmarket: 282677,
		tcgplayer: 98045
	}
}

export default card
