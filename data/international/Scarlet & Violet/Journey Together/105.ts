import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [601],
	set: Set,

	name: {
		'en-us': "N's Klinklang",
		'fr-fr': "Cliticlic de N",
		'es-es': "Klinklang de N",
		'de-de': "Ns Klikdiklak",
		'it-it': "Klinklang di N",
		'pt-br': "Klinklang do N",
		'es-mx': "Klinklang de N"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "N's Klang",
		'fr-fr': "Clic de N",
		'es-es': "Klang de N",
		'de-de': "Ns Kliklak",
		'it-it': "Klang di N",
		'pt-br': "Klang do N",
		'es-mx': "Klang de N"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Magnetic Blast",
			'fr-fr': "Explosion Magnétique",
			'es-es': "Explosión Magnética",
			'de-de': "Magnetstoß",
			'it-it': "Magnetebomba",
			'pt-br': "Explosão Magnética",
			'es-mx': "Explosión Magnética"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Triple Smash",
			'fr-fr': "Triple Éclate",
			'es-es': "Golpe Triple",
			'de-de': "Dreifachschmetterer",
			'it-it': "Tripla Schiacciata",
			'pt-br': "Pancada Tripla",
			'es-mx': "Triple Golpazo"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 120 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara."
		},

		damage: "120×"
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
	regulationMark: "I",
	illustrator: "matazo",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817257,
				tcgplayer: 623532
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817257,
				tcgplayer: 623532
			}
		},
	],
}

export default card
