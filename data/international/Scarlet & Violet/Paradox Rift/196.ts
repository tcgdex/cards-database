import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [595],
	set: Set,

	name: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Flail Around",
			'fr-fr': "Fléau Bougeant",
			'es-es': "Aleteo Frenético",
			'it-it': "Flagellamento",
			'pt-br': "Espancamento",
			'de-de': "Rumrudern"
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
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Joltik latch on to other Pokémon and suck out static electricity. They're often found sticking to Yamper's hindquarters.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740739,
				tcgplayer: 523877,
				cardtrader: 265512
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	
}

export default card
