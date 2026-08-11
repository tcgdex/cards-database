import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [619],
	set: Set,

	name: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	illustrator: "NC Empire",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Double Stab",
			'fr-fr': "Entaille Double",
			'es-es': "Doble Puñalada",
			'it-it': "Doppia Pugnalata",
			'pt-br': "Facada Dupla",
			'de-de': "Doppelstich"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "They seclude themselves in the mountains and devote themselves to training. The form of their kicks and chops differs from pack to pack."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545496,
				tcgplayer: 234252
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545496,
				tcgplayer: 234252
			}
		},
	],
}

export default card
