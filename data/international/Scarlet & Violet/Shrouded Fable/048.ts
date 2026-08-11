import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

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
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "sui",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780944,
				tcgplayer: 560359
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780944,
				tcgplayer: 560359
			}
		},
	],
}

export default card
