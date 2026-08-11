import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Bite Together",
				'fr-fr': "Morsure Commune",
				'es-es': "Mordedura Conjunta",
				'it-it': "Morso Collettivo",
				'pt-br': "Mordida em Bando",
				'de-de': "Kollektiver Biss"
			},
			effect: {
				'en-us': "If Durant is on your Bench, this attack does 60 more damage.",
				'fr-fr': "Si Fermite est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si Durant está en tu Banca, este ataque hace 60 puntos de daño más.",
				'it-it': "Se Durant è nella tua panchina, questo attacco infligge 60 danni in più.",
				'pt-br': "Se Durant estiver no seu Banco, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn sich Fermicula auf deiner Bank befindet, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "They lay their eggs deep inside their nests. When attacked by Heatmor, they retaliate using their massive mandibles."
	},

	dexId: [632],

	thirdParty: {
		cardmarket: 436219,
		tcgplayer: 208276
	}
}

export default card
