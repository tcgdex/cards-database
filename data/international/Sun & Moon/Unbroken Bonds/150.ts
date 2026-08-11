import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 70,

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
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Peck",
				'fr-fr': "Double Picpic",
				'es-es': "Doble Picotazo",
				'it-it': "Beccata Doppia",
				'pt-br': "Bicada Dupla",
				'de-de': "Doppelschnabel"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

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
		'en-us': "A two-headed Pokémon that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.",
	},

	thirdParty: {
		cardmarket: 372436,
		tcgplayer: 189252
	}
}

export default card
