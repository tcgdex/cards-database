import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [100],

	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
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
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 50,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457713,
				tcgplayer: 213137
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457713,
				tcgplayer: 213137
			}
		},
	],
}

export default card
