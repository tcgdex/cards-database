import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax ex",
		'fr-fr': "Ronflex-ex",
		'es-es': "Snorlax ex",
		'pt-br': "Snorlax ex",
		'it-it': "Snorlax-ex",
		'de-de': "Relaxo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'pt-br': "Força",
			'it-it': "Forza",
			'de-de': "Stärke"
		},

		damage: 80
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Toss-and-Turn Press",
			'fr-fr': "Pression Retournement",
			'es-es': "Presionar y Dar Vueltas",
			'pt-br': "Compressono",
			'it-it': "Pressa Gira e Rigira",
			'de-de': "Herumwälzende Presse"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 120 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
		},

		damage: "120×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805466,
				tcgplayer: 610431
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841278,
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 841279,
			}
		},
	],
}

export default card
