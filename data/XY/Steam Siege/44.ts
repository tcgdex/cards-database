import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		es: "Nidorino",
		it: "Nidorino",
		pt: "Nidorino",
		de: "Nidorino"
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		33,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nido Press",
				fr: "Charge Nido",
				es: "Presión Nido",
				it: "Nidopressa",
				pt: "Aperto do Nido",
				de: "Nidodruck"
			},
			effect: {
				en: "If Nidorina is on your Bench, this attack does 40 more damage.",
				fr: "Si Nidorina est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si Nidorina está en tu Banca, este ataque hace 40 puntos de daño más.",
				it: "Se Nidorina è nella tua panchina, questo attacco infligge 40 danni in più.",
				pt: "Se Nidorina estiver no seu Banco, este ataque causará 40 de danos adicionais.",
				de: "Wenn sich Nidorina auf deiner Bank befindet, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
