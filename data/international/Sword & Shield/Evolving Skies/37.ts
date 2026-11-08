import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",
	illustrator: "tetsuya koizumi",

	attacks: [{
		name: {
			'en-us': "Flail Around",
			'fr-fr': "Fléau Bougeant",
			'es-es': "Aleteo Frenético",
			'it-it': "Flagellamento",
			'pt-br': "Flail Around",
			'de-de': "Rumrudern"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Flip 3 coins. This attack does 10 damage for each heads.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "It is a shabby and ugly Pokémon. However, it is very hardy and can survive on little water."
	},

	dexId: [349],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574061,
				tcgplayer: 246846
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574061,
				tcgplayer: 246846
			}
		},
	],
}

export default card
