import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [840],

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Grass",
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
				'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 40,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It spends its entire life inside an apple. It hides from its natural enemies, bird Pokémon, by pretending it's just an apple and nothing more."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457558,
				tcgplayer: 213093
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457558,
				tcgplayer: 213093
			}
		},
	],
}

export default card
