import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
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
				en: "Bubble Jutsu",
				fr: "Bulle Jutsu",
				es: "Jutsu Burbuja",
				it: "Bolla Ninja",
				pt: "Bolha Jitsu",
				de: "Blubb-Jutsu"
			},
			effect: {
				en: "If you played Janine from your hand during this turn, this attack does 50 more damage.",
				fr: "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Sachiko de tu mano durante este turno, este ataque hace 50 puntos de daño más.",
				it: "Se hai giocato Nina dalla tua mano durante questo turno, questo attacco infligge 50 danni in più.",
				pt: "Se você jogou a Janine da sua mão durante esta vez de jogar, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn du Janina während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 50 Schadenspunkte mehr zu."
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



}

export default card
