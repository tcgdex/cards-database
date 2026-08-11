import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [415],
	set: Set,

	name: {
		'fr-fr': "Apitrini",
		'en-us': "Combee",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Double Tour",
			'en-us': "Double Spin",
			'es-es': "Doble Giro",
			'it-it': "Doppioturbo",
			'pt-br': "Giro Duplo",
			'de-de': "Doppeldreher"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715480,
				tcgplayer: 497419,
				cardtrader: 248304
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715480,
				tcgplayer: 497419,
				cardtrader: 248304
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	description: {
		'en-us': "At night, Combee sleep in a group of about a hundred, packed closely together in a lump.",
	},
}

export default card
