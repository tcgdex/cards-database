import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		es: "Hitmonlee",
		it: "Hitmonlee",
		pt: "Hitmonlee",
		de: "Kicklee"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Sweep",
				fr: "Balayette",
				es: "Puntapié",
				it: "Calciobasso",
				pt: "Movimento Baixo",
				de: "Fußtritt"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Coordinated Strike",
				fr: "Frappe Coordonnée",
				es: "Golpe Coordinado",
				it: "Attacco Coordinato",
				pt: "Golpe Coordenado",
				de: "Koordinierter Angriff"
			},
			effect: {
				en: "If Hitmonchan is on your Bench, this attack does 80 more damage.",
				fr: "Si Tygnon est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si Hitmonchan está en tu Banca, este ataque hace 80 puntos de daño más.",
				it: "Se Hitmonchan è nella tua panchina, questo attacco infligge 80 danni in più.",
				pt: "Se Hitmonchan estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn sich Nockchan auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick."
	}
}

export default card
