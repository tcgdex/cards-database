import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha",
		'es-es': "Sprigatito",
		'de-de': "Felori",
		'it-it': "Sprigatito",
		'pt-br': "Sprigatito",
		'es-mx': "Sprigatito"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tons of Treading",
			'fr-fr': "Pas Perpétuels",
			'es-es': "Sinfín de Pisadas",
			'de-de': "Tüchtiges Treteln",
			'it-it': "Pesta Calpesta",
			'pt-br': "Pisandinho",
			'es-mx': "Pisaditas sin Fin"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Mina Nakai",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817168,
				tcgplayer: 623443
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817168,
				tcgplayer: 623443
			}
		},
	],
}

export default card
