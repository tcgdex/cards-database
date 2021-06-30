import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Taillow",
		fr: "Nirondelle",
		es: "Taillow",
		it: "Taillow",
		pt: "Taillow",
		de: "Schwalbini"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		276,
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
				fr: "Ce Pokémon s’inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

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



}

export default card
