import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee",
		'es-es': "Hitmonlee",
		'it-it': "Hitmonlee",
		'pt-br': "Hitmonlee",
		'de-de': "Kicklee"
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
				'en-us': "Low Sweep",
				'fr-fr': "Balayette",
				'es-es': "Puntapié",
				'it-it': "Calciobasso",
				'pt-br': "Movimento Baixo",
				'de-de': "Fußtritt"
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
				'en-us': "Coordinated Strike",
				'fr-fr': "Frappe Coordonnée",
				'es-es': "Golpe Coordinado",
				'it-it': "Attacco Coordinato",
				'pt-br': "Golpe Coordenado",
				'de-de': "Koordinierter Angriff"
			},
			effect: {
				'en-us': "If Hitmonchan is on your Bench, this attack does 80 more damage.",
				'fr-fr': "Si Tygnon est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si Hitmonchan está en tu Banca, este ataque hace 80 puntos de daño más.",
				'it-it': "Se Hitmonchan è nella tua panchina, questo attacco infligge 80 danni in più.",
				'pt-br': "Se Hitmonchan estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn sich Nockchan auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
		'en-us': "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick."
	},

	dexId: [106],

	thirdParty: {
		cardmarket: 436589,
		tcgplayer: 208403
	}
}

export default card
