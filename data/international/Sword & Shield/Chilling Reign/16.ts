import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [810],
	set: Set,

	name: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
		'es-es': "Grookey",
		'it-it': "Grookey",
		'pt-br': "Grookey",
		'de-de': "Chimpep"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Hit Twice",
			'fr-fr': "Double Frappe",
			'es-es': "Doble Redoble",
			'it-it': "Doppia Botta",
			'pt-br': "Batida Dupla",
			'de-de': "Zweimal zuschlagen"
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
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567096,
				tcgplayer: 241665
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567096,
				tcgplayer: 241665
			}
		},
	],
}

export default card
