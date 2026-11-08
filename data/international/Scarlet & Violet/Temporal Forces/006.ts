import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Headbutt",
			'fr-fr': "Double Coup d'Boule",
			'es-es': "Doble Cabezazo",
			'it-it': "Doppia Bottintesta",
			'pt-br': "Cabeçada Dupla",
			'de-de': "Doppelte Kopfnuss"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'de-de': "Samenbomben"
		},

		damage: 20
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
		'en-us': "If it senses danger, it scatters spores from the top of its head to protect itself.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760636,
				tcgplayer: 542652
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760636,
				tcgplayer: 542652
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

}

export default card