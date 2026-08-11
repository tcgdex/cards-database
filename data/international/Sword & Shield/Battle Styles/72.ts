import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [472],
	set: Set,

	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'pt-br': "Gliscor",
		'de-de': "Skorgro"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	attacks: [{
		name: {
			'en-us': "Acrobatics",
			'fr-fr': "Acrobatie",
			'es-es': "Acróbata",
			'it-it': "Acrobazia",
			'pt-br': "Acrobático",
			'de-de': "Akrobatik"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Guillotine",
			'fr-fr': "Guillotine",
			'es-es': "Guillotina",
			'it-it': "Ghigliottina",
			'pt-br': "Guilhotina",
			'de-de': "Guillotine"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Its flight is soundless. It uses its lengthy tail to carry off its prey… Then its elongated fangs do the rest."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545476,
				tcgplayer: 234248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545476,
				tcgplayer: 234248
			}
		},
	],
}

export default card
