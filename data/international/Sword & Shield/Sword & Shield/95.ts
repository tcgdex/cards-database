import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'es-es': "Hitmonchan",
		'it-it': "Hitmonchan",
		'pt-br': "Hitmonchan",
		'de-de': "Nockchan"
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
				'en-us': "Coordinated Beatdown",
				'fr-fr': "Dérouillée Coordonnée",
				'es-es': "Derribo Coordinado",
				'it-it': "Batosta Coordinata",
				'pt-br': "Surra Coordenada",
				'de-de': "Koordinierter Niederprügler"
			},
			effect: {
				'en-us': "If Hitmonlee is on your Bench, this attack does 20 more damage.",
				'fr-fr': "Si Kicklee est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si Hitmonlee está en tu Banca, este ataque hace 20 puntos de daño más.",
				'it-it': "Se Hitmonlee è nella tua panchina, questo attacco infligge 20 danni in più.",
				'pt-br': "Se Hitmonlee estiver no seu Banco, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wenn sich Kicklee auf deiner Bank befindet, fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Mach Cross",
				'fr-fr': "Passage Éclair",
				'es-es': "Puñetazo Mach",
				'it-it': "Incromach",
				'pt-br': "Cruzado Veloz",
				'de-de': "Tempo-Cross"
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
	},

	description: {
		'en-us': "Its punches slice the air. However, it seems to need a short break after fighting for three minutes."
	},

	dexId: [107],

	thirdParty: {
		cardmarket: 436594,
		tcgplayer: 208404
	}
}

export default card
