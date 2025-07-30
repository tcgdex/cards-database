import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [328],
	set: Set,

	name: {
		fr: "Kraknoix",
		en: "Trapinch",
		es: "Trapinch",
		it: "Trapinch",
		pt: "Trapinch",
		de: "Knacklion"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Vibration Terrestre",
			en: "Land's Pulse",
			es: "Pulso Telúrico",
			it: "Pulsazione Tellurica",
			pt: "Pulso da Terra",
			de: "Bodenpuls"
		},

		effect: {
			fr: "Si un Stade est en jeu, cette attaque inflige 10 dégâts supplémentaires.",
			en: "If a Stadium is in play, this attack does 10 more damage.",
			es: "Si hay un Estadio en juego, este ataque hace 10 puntos de daño más.",
			it: "Se c'è in gioco una carta Stadio, questo attacco infligge 10 danni in più.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 10 pontos de dano a mais.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

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
	},

	thirdParty: {
		cardmarket: 539223
	}
}

export default card
