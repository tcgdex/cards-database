import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Double Smash",
			'fr-fr': "Double Broiement",
			'es-es': "Golpe Doble",
			'it-it': "Colpo Duplice",
			'pt-br': "Bordoada Dupla",
			'de-de': "Doppelstoß"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785933,
				tcgplayer: 567305
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785933,
				tcgplayer: 567305
			}
		},
	],

	illustrator: "Fujimoto Gold",

}

export default card
