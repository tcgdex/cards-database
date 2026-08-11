import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [509],
	set: Set,

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe",
			'es-es': "Golpes Furia",
			'it-it': "Sfuriate",
			'pt-br': "Golpes de Fúria",
			'de-de': "Kratzfurie"
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
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691795,
				tcgplayer: 478215
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691795,
				tcgplayer: 478215
			}
		},
	],
}

export default card
