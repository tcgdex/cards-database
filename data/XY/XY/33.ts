import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
				es: "Carga Descuidada",
				it: "Carica Avventata",
				pt: "Carga Indomável",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281370
	}
}

export default card
