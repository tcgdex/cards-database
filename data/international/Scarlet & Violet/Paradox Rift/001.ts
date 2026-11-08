import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [283],
	set: Set,

	name: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Triple Spin",
			'fr-fr': "Triple Tour",
			'es-es': "Triple Giro",
			'it-it': "Triploturbo",
			'pt-br': "Giro Triplo",
			'de-de': "Dreifachdreher"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It secretes a thick, sweet-scented syrup from the tip of its head. It lives on weed-choked ponds.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740477,
				tcgplayer: 523584,
				cardtrader: 265003
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740477,
				tcgplayer: 523584,
				cardtrader: 265003
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	
}

export default card
