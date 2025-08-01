import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
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
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge Order",
				fr: "Ordre de Charge",
				es: "Orden de Carga",
				it: "Alla Carica",
				pt: "Ordem de Carga",
				de: "Marschbefehl"
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Pawniard.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Scalpion sur votre Banc.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de tus Pawniard en Banca.",
				it: "Questo attacco infligge 30 danni in più per ogni Pawniard nella tua panchina.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Pawniard no seu Banco.",
				de: "Diese Attacke fügt für jedes Gladiantri auf deiner Bank 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slicing Blade",
				fr: "Lame Tranchante",
				es: "Cuchilla Cortante",
				it: "Affettalama",
				pt: "Lâmina Fatiante",
				de: "Schwertschneide"
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
		en: "Violent conflicts erupt between Bisharp and Fraxure over places where sharpening stones can be found."
	},

	dexId: [625],

	thirdParty: {
		cardmarket: 436779
	}
}

export default card
