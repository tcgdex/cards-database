import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'es-es': "Golpe Kárate",
				'it-it': "Colpokarate",
				'pt-br': "Golpe de Caratê",
				'de-de': "Karateschlag"
			},
			effect: {
				'en-us': "This attack does 60 damage minus 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 60 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 60 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 60 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 60 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "60−",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Submission",
				'fr-fr': "Sacrifice",
				'es-es': "Sumisión",
				'it-it': "Sottomissione",
				'pt-br': "Submissão",
				'de-de': "Überroller"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

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
		'en-us': "Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods.",
	},

	thirdParty: {
		cardmarket: 293412,
		tcgplayer: 124071
	}
}

export default card
