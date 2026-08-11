import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Kagemaru Himeno",

	attacks: [{
		name: {
			'en-us': "Continuous Spin",
			'fr-fr': "Rotation Continue",
			'es-es': "Giro Continuo",
			'it-it': "Eternogiro",
			'pt-br': "Continuous Spin",
			'de-de': "Dauerdrehung"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,

	description: {
		'en-us': "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way."
	},

	dexId: [187],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574026,
				tcgplayer: 246814
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574026,
				tcgplayer: 246814
			}
		},
	],
}

export default card
