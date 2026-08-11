import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'de-de': "Ponita",
		'it-it': "Ponyta",
		'es-es': "Ponyta",
		'pt-br': "Ponyta",
		'es-mx': "Ponyta"
	},

	illustrator: "Ayako Ozaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Headbutt",
			'fr-fr': "Double Coup d'Boule",
			'de-de': "Doppelte Kopfnuss",
			'it-it': "Doppia Bottintesta",
			'es-es': "Doble Cabezazo",
			'pt-br': "Cabeçada Dupla",
			'es-mx': "Doble Cabezazo"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825902,
				tcgplayer: 632852
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825902,
				tcgplayer: 632852
			}
		},
	],
}

export default card
