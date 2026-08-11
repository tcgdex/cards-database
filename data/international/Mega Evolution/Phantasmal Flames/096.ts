import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'es-mx': "Nymble",
		'de-de': "Micrick",
		'it-it': "Nymble",
		'pt-br': "Nymble"
	},

	rarity: "Illustration rare",
	category: "Pokemon",

	dexId: [919],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Flail Around",
			'fr-fr': "Fléau Bougeant",
			'es-es': "Aleteo Frenético",
			'es-mx': "Meneo Frenético",
			'de-de': "Rumrudern",
			'it-it': "Flagellamento",
			'pt-br': "Espancamento"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara."
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
	regulationMark: "I",

	description: {
		'en-us': "It has its third set of legs folded up. When it's in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
	},

	illustrator: "Nakamura Ippan",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857671,
				tcgplayer: 662204,
				cardtrader: 356882
			}
		},
	],
}

export default card
