import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
		es: "Geodude",
		it: "Geodude",
		pt: "Geodude",
		de: "Kleinstein"
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
				en: "Double-Edge",
				fr: "Damoclès",
				es: "Doble Filo",
				it: "Sdoppiatore",
				pt: "Faca de Dois Gumes",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
