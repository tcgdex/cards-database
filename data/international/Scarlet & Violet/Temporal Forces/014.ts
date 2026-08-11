import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [546],
	set: Set,

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Triple Spin",
			'fr-fr': "Triple Tour",
			'es-es': "Triple Giro",
			'it-it': "Triploturbo",
			'pt-br': "Giro Triplo",
			'de-de': "Dreifachdreher"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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
	regulationMark: "H",

	description: {
		'en-us': "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760644,
				tcgplayer: 542672
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760644,
				tcgplayer: 542672
			}
		},
	],

	illustrator: "Kyoko Umemoto",

}

export default card