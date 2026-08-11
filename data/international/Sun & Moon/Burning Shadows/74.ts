import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Crabominable",
		'fr-fr': "Crabominable",
		'es-es': "Crabominable",
		'it-it': "Crabominable",
		'pt-br': "Crabominable",
		'de-de': "Krawell"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		740,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Gutsy Hammer",
				'fr-fr': "Marteau Courageux",
				'es-es': "Martilleo Atrevido",
				'it-it': "Martelbaldo",
				'pt-br': "Martelada Corajosa",
				'de-de': "Mutiger Hammer"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself for each damage counter on it.",
				'fr-fr': "Ce Pokémon s’inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo por cada contador de daño que tenga sobre él.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso per ogni segnalino danno presente su di esso.",
				'pt-br': "Este Pokémon causa 10 pontos de dano a si mesmo para cada contador de dano nele.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte mal der Anzahl der auf ihm liegenden Schadensmarken zu."
			},
			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Double Stomp",
				'fr-fr': "Double Écrasement",
				'es-es': "Pisotón Doble",
				'it-it': "Doppio Pestone",
				'pt-br': "Pisoteada Dupla",
				'de-de': "Doppelstampfer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It aimed for the top but got lost and ended up on a snowy mountain. Being forced to endure the cold, this Pokémon evolved and grew fur.",
	},

	thirdParty: {
		cardmarket: 299476,
		tcgplayer: 138560
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
