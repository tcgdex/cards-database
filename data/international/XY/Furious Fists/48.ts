import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'es-es': "Hitmonchan",
		'it-it': "Hitmonchan",
		'pt-br': "Hitmonchan",
		'de-de': "Nockchan"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bullet Punch",
				'fr-fr': "Pisto-Poing",
				'es-es': "Puño Bala",
				'it-it': "Pugnoscarica",
				'pt-br': "Soco Rajada",
				'de-de': "Patronenhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Cross",
				'fr-fr': "Passage Éclair",
				'es-es': "Puñetazo Mach",
				'it-it': "Incromach",
				'pt-br': "Cruzado Veloz",
				'de-de': "Tempo-Cross"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.",
	},

	thirdParty: {
		cardmarket: 281712,
		tcgplayer: 92225
	}
}

export default card
