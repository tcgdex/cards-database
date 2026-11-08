import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'de-de': "Panflam",
		'it-it': "Chimchar",
		'es-es': "Chimchar",
		'pt-br': "Chimchar",
		'es-mx': "Chimchar"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	dexId: [390],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe",
			'de-de': "Kratzfurie",
			'it-it': "Sfuriate",
			'es-es': "Golpes Furia",
			'pt-br': "Golpes de Fúria",
			'es-mx': "Garras Furiosas"
		},

		damage: "20×",

		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875190,
				tcgplayer: 684465
			}
		},
	],
}

export default card
