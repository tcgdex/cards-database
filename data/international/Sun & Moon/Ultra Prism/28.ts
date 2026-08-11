import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Alolan Sandshrew",
		'fr-fr': "Sabelette d’Alola",
		'es-es': "Sandshrew de Alola",
		'it-it': "Sandshrew di Alola",
		'pt-br': "Sandshrew de Alola",
		'de-de': "Alola-Sandan"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

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
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "An ancient tradition of Alolan festivals, still carried on to this day, is a competition to slide Sandshrew across ice as far as one can.",
	},

	thirdParty: {
		cardmarket: 315959,
		tcgplayer: 157645
	}
}

export default card
