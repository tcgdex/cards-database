import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [328],
	set: Set,

	name: {
		'fr-fr': "Kraknoix",
		'en-us': "Trapinch",
		'es-es': "Trapinch",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
		'de-de': "Knacklion"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			'fr-fr': "Vibration Terrestre",
			'en-us': "Land's Pulse",
			'es-es': "Pulso Telúrico",
			'it-it': "Pulsazione Tellurica",
			'pt-br': "Pulso da Terra",
			'de-de': "Bodenpuls"
		},

		effect: {
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 10 dégâts supplémentaires.",
			'en-us': "If a Stadium is in play, this attack does 10 more damage.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 10 puntos de daño más.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 10 danni in più.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 10 pontos de dano a mais.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 10 Schadenspunkte mehr zu."
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


	stage: "Basic",

	description: {
		'en-us': "Its nest is a sloped, bowl-like pit in the desert. Once something has fallen in, there is no escape."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539223,
				tcgplayer: 232490
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539223,
				tcgplayer: 232490
			}
		},
	],
}

export default card
