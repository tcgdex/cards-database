import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'es-es': "Dodrio",
		'it-it': "Dodrio",
		'pt-br': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'es-es': "Furia",
				'it-it': "Ira",
				'pt-br': "Ira",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Esse ataque causa 10 de danos adicionais para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Endeavor",
				'fr-fr': "Effort",
				'es-es': "Esfuerzo",
				'it-it': "Rimonta",
				'pt-br': "Esforço",
				'de-de': "Notsituation"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50+",

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
		'en-us': "An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.",
	},

	thirdParty: {
		cardmarket: 281436,
		tcgplayer: 84856
	}
}

export default card
