import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		'fr-fr': "Scalpion",
		'en-us': "Pawniard",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Triple Lame",
			'en-us': "Triple Cutter",
			'es-es': "Corte Triple",
			'it-it': "Triplotaglio",
			'pt-br': "Cortador Triplo",
			'de-de': "Dreifachschnitt"
		},

		effect: {
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725228,
				tcgplayer: 509935,
				cardtrader: 255833
			}
		},
		{
			type: 'normal',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 781859
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725228,
				tcgplayer: 509935,
				cardtrader: 255833
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	
}

export default card
