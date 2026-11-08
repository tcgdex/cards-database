import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe",
			'es-es': "Golpes Furia",
			'it-it': "Sfuriate",
			'pt-br': "Golpes de Fúria",
			'de-de': "Kratzfurie"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slashing Claw",
			'fr-fr': "Griffe Taillante",
			'es-es': "Garra Cuchillazo",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora",
			'de-de': "Schlitzende Klaue"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "NC Empire",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780945,
				tcgplayer: 560360
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780945,
				tcgplayer: 560360
			}
		},
	],
}

export default card
