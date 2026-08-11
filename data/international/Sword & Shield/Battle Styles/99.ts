import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [208],
	set: Set,

	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'es-es': "Steelix",
		'it-it': "Steelix",
		'pt-br': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "NC Empire",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	attacks: [{
		name: {
			'en-us': "Steel Swing",
			'fr-fr': "Frappe d'Acier",
			'es-es': "Golpe de Acero",
			'it-it': "Oscillacciaio",
			'pt-br': "Balanço de Aço",
			'de-de': "Stahlschwung"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It is thought its body transformed as a result of iron accumulating internally from swallowing soil."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545576,
				tcgplayer: 234184
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545576,
				tcgplayer: 234184
			}
		},
	],
}

export default card
