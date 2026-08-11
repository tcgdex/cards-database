import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'it-it': "Pikipek",
		'pt-br': "Pikipek",
		'de-de': "Peppeck"
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		731,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nosedive",
				'fr-fr': "Descente en Piqué",
				'es-es': "Ataque en Picado",
				'it-it': "Rapidiscesa",
				'pt-br': "Mergulhar de Bico",
				'de-de': "Sturzflugangriff"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can peck at a rate of 16 times a second to drill holes in trees. It uses holes for food storage and for nesting.",
	},
}

export default card
