import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [753],
	set: Set,

	name: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'es-es': "Fomantis",
		'it-it': "Fomantis",
		'pt-br': "Fomantis",
		'de-de': "Imantis"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Continuous Slash",
			'fr-fr': "Tranche Sans Fin",
			'es-es': "Cuchillada Continua",
			'it-it': "Lameterna",
			'pt-br': "Corte Contínuo",
			'de-de': "Stetiger Schlitzer"
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
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It loves the sunshine. When it basks in the sunlight regularly, it grows up with vivid coloration."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544966,
				tcgplayer: 234075
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544966,
				tcgplayer: 234075
			}
		},
	],
}

export default card
