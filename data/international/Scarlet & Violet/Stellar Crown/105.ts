import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal ex",
		'fr-fr': "Melmetal-ex",
		'es-es': "Melmetal ex",
		'it-it': "Melmetal-ex",
		'pt-br': "Melmetal ex",
		'de-de': "Melmetal-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Iron Swing",
			'fr-fr': "Frappe de Fer",
			'es-es': "Ferrogolpe",
			'it-it': "Ferrocolpo",
			'pt-br': "Giro Metálico",
			'de-de': "Eisenschwung"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785959,
				tcgplayer: 567331
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841266,
			}
		},
		{
			type: "holo",
			size: "jumbo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841267,
			}
		},
	],

	suffix: "ex",
	illustrator: "takuyoa",

}

export default card
