import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		'fr-fr': "Mélofée",
		'en-us': "Clefairy",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'fr-fr': "Paf Paf",
			'en-us': "Slap Slap",
			'es-es': "Doble Bofetada",
			'it-it': "Schiaffo e Manrovescio",
			'pt-br': "Bate e Rebate",
			'de-de': "Klitsch-Klatsch"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its adorable behavior and cry make it highly popular. However, this cute Pokémon is rarely found.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725161,
				tcgplayer: 509811,
				cardtrader: 255766
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725161,
				tcgplayer: 509811,
				cardtrader: 255766
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
