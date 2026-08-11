import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [118],
	set: Set,

	name: {
		'fr-fr': "Poissirène",
		'en-us': "Goldeen",
		'es-es': "Goldeen",
		'it-it': "Goldeen",
		'pt-br': "Goldeen",
		'de-de': "Goldini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Triple Frappe",
			'en-us': "Triple Strike",
			'es-es': "Triple Impacto",
			'it-it': "Triplo Colpo",
			'pt-br': "Golpe Triplo",
			'de-de': "Dreifachstoß"
		},

		effect: {
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Eau Aspergeante",
			'en-us': "Sprinkle Water",
			'es-es': "Esparcir Agua",
			'it-it': "Goccioline",
			'pt-br': "Aspergir Água",
			'de-de': "Wassersprüher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733713,
				tcgplayer: 516681,
				cardtrader: 261120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733713,
				tcgplayer: 516681,
				cardtrader: 261120
			}
		},
	],

	illustrator: "SIE NANAHARA",

	
}

export default card
