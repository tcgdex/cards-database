import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'es-es': "Simisear",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'de-de': "Grillchita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Double Smash",
			'fr-fr': "Double Broiement",
			'es-es': "Golpe Doble",
			'it-it': "Colpo Duplice",
			'pt-br': "Bordoada Dupla",
			'de-de': "Doppelstoß"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794278,
				tcgplayer: 590049
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794278,
				tcgplayer: 590049
			}
		},
	],

	illustrator: "Taiga Kasai",
	
}

export default card
