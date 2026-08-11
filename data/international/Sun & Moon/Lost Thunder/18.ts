import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Friends",
				'fr-fr': "Force de l’Amitié",
				'es-es': "Amigos Poderosos",
				'it-it': "Spallecoperte",
				'pt-br': "Amigos Poderosos",
				'de-de': "Einflussreiche Freunde"
			},
			effect: {
				'en-us': "If you have any Stage 2 Pokémon on your Bench, this attack does 90 more damage.",
				'fr-fr': "Si vous avez au moins un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si tienes algún Pokémon de Fase 2 en tu Banca, este ataque hace 90 puntos de daño más.",
				'it-it': "Se hai dei Pokémon di Fase 2 in panchina, questo attacco infligge 90 danni in più.",
				'pt-br': "Se você tiver algum Pokémon Estágio 2 no seu Banco, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn du mindestens 1 Phase-2-Pokémon auf deiner Bank hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "With its Herculean powers, it can easily throw around an object that is 100 times its own weight.",
	},

	thirdParty: {
		cardmarket: 365611,
		tcgplayer: 178817
	}
}

export default card
