import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [588],

	name: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'es-es': "Karrablast",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'de-de': "Laukaps"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Continuous Headbutt",
				'fr-fr': "Coup d'Boule Sans Fin",
				'es-es': "Golpe Cabeza Continuo",
				'it-it': "Bottintesta Continue",
				'pt-br': "Cabeçada Contínua",
				'de-de': "Anhaltender Kopfstoß"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

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


	stage: "Basic",

	description: {
		'en-us': "Its strange physiology reacts to electrical energy in interesting ways. The presence of a Shelmet will cause this Pokémon to evolve."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482914,
				tcgplayer: 219080
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482914,
				tcgplayer: 219080
			}
		},
	],
}

export default card
