import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge Order",
				'fr-fr': "Ordre de Charge",
				'es-es': "Orden de Carga",
				'it-it': "Alla Carica",
				'pt-br': "Ordem de Carga",
				'de-de': "Marschbefehl"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each of your Benched Pawniard.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Scalpion sur votre Banc.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada uno de tus Pawniard en Banca.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Pawniard nella tua panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pawniard no seu Banco.",
				'de-de': "Diese Attacke fügt für jedes Gladiantri auf deiner Bank 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Slicing Blade",
				'fr-fr': "Lame Tranchante",
				'es-es': "Cuchilla Cortante",
				'it-it': "Affettalama",
				'pt-br': "Lâmina Fatiante",
				'de-de': "Schwertschneide"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Violent conflicts erupt between Bisharp and Fraxure over places where sharpening stones can be found."
	},

	dexId: [625],

	thirdParty: {
		cardmarket: 436779,
		tcgplayer: 208445
	}
}

export default card
