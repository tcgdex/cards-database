import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		es: "Hitmonchan",
		it: "Hitmonchan",
		pt: "Hitmonchan",
		de: "Nockchan"
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
				"Fighting",
			],
			name: {
				en: "Coordinated Beatdown",
				fr: "Dérouillée Coordonnée",
				es: "Derribo Coordinado",
				it: "Batosta Coordinata",
				pt: "Surra Coordenada",
				de: "Koordinierter Niederprügler"
			},
			effect: {
				en: "If Hitmonlee is on your Bench, this attack does 20 more damage.",
				fr: "Si Kicklee est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si Hitmonlee está en tu Banca, este ataque hace 20 puntos de daño más.",
				it: "Se Hitmonlee è nella tua panchina, questo attacco infligge 20 danni in più.",
				pt: "Se Hitmonlee estiver no seu Banco, este ataque causará 20 pontos de dano a mais.",
				de: "Wenn sich Kicklee auf deiner Bank befindet, fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
				es: "Puñetazo Mach",
				it: "Incromach",
				pt: "Cruzado Veloz",
				de: "Tempo-Cross"
			},

			damage: 60,

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
	}
}

export default card
