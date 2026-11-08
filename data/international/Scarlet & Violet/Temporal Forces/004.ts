import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [274],
	set: Set,

	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Comet Slap",
			'fr-fr': "Gifle Comète",
			'es-es': "Bofetón Cometa",
			'it-it': "Cometasberla",
			'pt-br': "Tapa Cometa",
			'de-de': "Kometenklatscher"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
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
		'en-us': "It lives deep in forests. With the leaf on its head, it makes a flute whose song makes listeners uneasy.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760634,
				tcgplayer: 542649
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760634,
				tcgplayer: 542649
			}
		},
	],

	illustrator: "Lee HyunJung",

}

export default card