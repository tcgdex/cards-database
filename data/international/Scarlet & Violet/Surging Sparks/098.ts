import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dual Chop",
			'fr-fr': "Double Baffe",
			'es-es': "Golpe Bis",
			'it-it': "Doppiocolpo",
			'pt-br': "Pancada Dupla",
			'de-de': "Doppelhieb"
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
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794412,
				tcgplayer: 589995
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794412,
				tcgplayer: 589995
			}
		},
	],

	illustrator: "Apios",

}

export default card
