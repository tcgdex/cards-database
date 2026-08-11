import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [293],

	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'es-es': "Whismur",
		'it-it': "Whismur",
		'pt-br': "Whismur",
		'de-de': "Flurmel"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulade Continue",
				'es-es': "Avalancha Continua",
				'it-it': "Capriole",
				'pt-br': "Tombo Contínuo",
				'de-de': "Dauerrollen"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "If it senses danger, it scares the foe by crying out with the volume of a jet-plane engine."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512385,
				tcgplayer: 226591
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512385,
				tcgplayer: 226591
			}
		},
	],
}

export default card
