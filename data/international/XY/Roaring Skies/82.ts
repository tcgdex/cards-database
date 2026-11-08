import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		661,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
				'es-es': "Acróbata",
				'it-it': "Acrobazia",
				'pt-br': "Acrobático",
				'de-de': "Akrobatik"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 10 danni in più.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 10 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Despite the beauty of its lilting voice, it's merciless to intruders that enter its territory.",
	},

	thirdParty: {
		cardmarket: 282750,
		tcgplayer: 98118
	}
}

export default card
