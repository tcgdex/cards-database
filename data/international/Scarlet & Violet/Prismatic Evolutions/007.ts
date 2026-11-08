import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [546],
	set: Set,

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'pt-br': "Cottonee",
		'it-it': "Cottonee",
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
			'pt-br': "Giro Triplo",
			'it-it': "Triploturbo",
			'de-de': "Dreifachdreher"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
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
	illustrator: "Kyoko Umemoto",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805396,
				tcgplayer: 610362
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805396,
				tcgplayer: 610362
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806418,
				tcgplayer: 610541
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806419,
				tcgplayer: 610642
			}
		},
	],
}

export default card
