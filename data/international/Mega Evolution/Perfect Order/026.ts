import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [403],

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'es-mx': "Shinx",
		'de-de': "Sheinux",
		'it-it': "Shinx",
		'pt-br': "Shinx"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Double Scratch",
			'fr-fr': "Double Écorchure",
			'es-es': "Arañazo Doble",
			'es-mx': "Doble Arañazo",
			'de-de': "Doppelkratzer",
			'it-it': "Doppio Graffio",
			'pt-br': "Arranhão Duplo"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684409,
				cardmarket: 877439
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684409,
				cardmarket: 877439
			}
		}
	],

}

export default card
