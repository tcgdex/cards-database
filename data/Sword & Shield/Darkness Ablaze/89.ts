import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [328],
	name: {
		en: "Trapinch",
		fr: "Kraknoix",
		es: "Trapinch",
		it: "Trapinch",
		pt: "Trapinch",
		de: "Knacklion"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Land's Pulse",
				fr: "Vibration Terrestre",
				es: "Pulso Telúrico",
				it: "Pulsazione Tellurica",
				pt: "Pulso da Terra",
				de: "Bodenpuls"
			},
			effect: {
				en: "If a Stadium is in play, this attack does 10 more damage.",
				fr: "Si un Stade est en jeu, cette attaque inflige 10 dégâts supplémentaires.",
				es: "Si hay un Estadio en juego, este ataque hace 10 puntos de daño más.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 10 danni in più.",
				pt: "Se um Estádio estiver em jogo, este ataque causará 10 pontos de dano a mais.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 10 Schadenspunkte mehr zu."
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
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Its nest is a sloped, bowl-like pit in the desert. Once something has fallen in, there is no escape."
	}
}

export default card
