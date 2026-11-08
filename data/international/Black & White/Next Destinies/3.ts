import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'es-es': "Kricketot",
		'it-it': "Kricketot",
		'pt-br': "Kricketot",
		'de-de': "Zirpurze"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		401,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Double Headbutt",
				'fr-fr': "Double Coup d'Boule",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.",
	},

	thirdParty: {
		cardmarket: 280228,
		tcgplayer: 86531
	}
}

export default card
