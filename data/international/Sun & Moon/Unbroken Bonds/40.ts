import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bubble Jutsu",
				'fr-fr': "Bulle Jutsu",
				'es-es': "Jutsu Burbuja",
				'it-it': "Bolla Ninja",
				'pt-br': "Bolha Jitsu",
				'de-de': "Blubb-Jutsu"
			},
			effect: {
				'en-us': "If you played Janine from your hand during this turn, this attack does 50 more damage.",
				'fr-fr': "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Sachiko de tu mano durante este turno, este ataque hace 50 puntos de daño más.",
				'it-it': "Se hai giocato Nina dalla tua mano durante questo turno, questo attacco infligge 50 danni in più.",
				'pt-br': "Se você jogou a Janine da sua mão durante esta vez de jogar, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn du Janina während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It drifts through the sea searching for prey. Its poisonous tentacles break off sometimes, but after a while, they grow back.",
	},

	thirdParty: {
		cardmarket: 372331,
		tcgplayer: 189116
	}
}

export default card
