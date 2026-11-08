import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Double Impact",
			'fr-fr': "Double Impact",
			'es-es': "Impacto Doble",
			'it-it': "Doppio Impatto",
			'pt-br': "Impacto Duplo",
			'de-de': "Doppelter Einschlag"
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
			type: "normal",
			thirdParty: {
				cardmarket: 794500,
				tcgplayer: 589881
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794500,
				tcgplayer: 589881
			}
		},
	],

	illustrator: "kawayoo",

}

export default card
