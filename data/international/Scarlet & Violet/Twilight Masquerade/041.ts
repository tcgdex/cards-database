import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [60],
	set: Set,

	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tail Rap",
			'fr-fr': "Frap'Keu",
			'es-es': "Coleada",
			'it-it': "Mano-Coda",
			'pt-br': "Batida de Cauda",
			'de-de': "Schweifklopfen"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Its legs are newly grown, and it can't walk very well. It seems to prefer swimming through the water instead.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769215,
				tcgplayer: 550085
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769215,
				tcgplayer: 550085
			}
		},
	],

	illustrator: "Kedamahadaitai Yawarakai",

}

export default card