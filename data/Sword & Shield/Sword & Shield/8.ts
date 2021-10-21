import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
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
				en: "Bite Together",
				fr: "Morsure Commune",
				es: "Mordedura Conjunta",
				it: "Morso Collettivo",
				pt: "Mordida em Bando",
				de: "Kollektiver Biss"
			},
			effect: {
				en: "If Durant is on your Bench, this attack does 60 more damage.",
				fr: "Si Fermite est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si Durant está en tu Banca, este ataque hace 60 puntos de daño más.",
				it: "Se Durant è nella tua panchina, questo attacco infligge 60 danni in più.",
				pt: "Se Durant estiver no seu Banco, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn sich Fermicula auf deiner Bank befindet, fügt diese Attacke 60 Schadenspunkte mehr zu."
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
		en: "They lay their eggs deep inside their nests. When attacked by Heatmor, they retaliate using their massive mandibles."
	}
}

export default card
