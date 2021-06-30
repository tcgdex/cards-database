import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Rocks",
				fr: "Rochers Roulants",
				es: "Rocas Rodantes",
				it: "Massi Rotolanti",
				pt: "Pedras Rolantes",
				de: "Rollende Steine"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
				es: "Doble Filo",
				it: "Sdoppiatore",
				pt: "Faca de Dois Gumes",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
