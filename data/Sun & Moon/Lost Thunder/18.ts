import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 120,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Powerful Friends",
				fr: "Force de l’Amitié",
				es: "Amigos Poderosos",
				it: "Spallecoperte",
				pt: "Amigos Poderosos",
				de: "Einflussreiche Freunde"
			},
			effect: {
				en: "If you have any Stage 2 Pokémon on your Bench, this attack does 90 more damage.",
				fr: "Si vous avez au moins un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tienes algún Pokémon de Fase 2 en tu Banca, este ataque hace 90 puntos de daño más.",
				it: "Se hai dei Pokémon di Fase 2 in panchina, questo attacco infligge 90 danni in più.",
				pt: "Se você tiver algum Pokémon Estágio 2 no seu Banco, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du mindestens 1 Phase-2-Pokémon auf deiner Bank hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
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

	retreat: 2,



}

export default card
