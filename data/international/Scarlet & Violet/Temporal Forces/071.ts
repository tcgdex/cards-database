import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [578],
	set: Set,

	name: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'es-es': "Duosion",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'de-de': "Mitodos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'es-es': "Solosis",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'de-de': "Monozyto"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Trick",
			'fr-fr': "Double Ruse",
			'es-es': "Doble Truco",
			'it-it': "Doppio Trucco",
			'pt-br': "Travessura Dupla",
			'de-de': "Doppeltrick"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Its psychic power can supposedly cover a range of more than half a mile—but only if its two brains can agree with each other.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760701,
				tcgplayer: 542815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760701,
				tcgplayer: 542815
			}
		},
	],

	illustrator: "mele",

}

export default card