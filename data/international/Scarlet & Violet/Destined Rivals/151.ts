import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [115],
	set: Set,

	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'de-de': "Kangama",
		'it-it': "Kangaskhan",
		'es-es': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'es-mx': "Kangaskhan"
	},


	illustrator: "Sanosuke Sakuma",

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'es-es': "Bofetada Gentil",
			'pt-br': "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dizzy Punch",
			'fr-fr': "Uppercut",
			'de-de': "Irrschlag",
			'it-it': "Stordipugno",
			'es-es': "Puño Mareo",
			'pt-br': "Soco Estonteante",
			'es-mx': "Puño Mareador"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826025,
				tcgplayer: 632956
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826025,
				tcgplayer: 632956
			}
		},
	],
}

export default card
