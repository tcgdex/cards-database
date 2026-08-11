import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'de-de': "Sonnkern"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [191],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cure Kernels",
				'fr-fr': "Graines de soin",
				'de-de': "Heilsamen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from 1 of your Pokémon.",
				'fr-fr': "Retirez 2 marqueurs de dégâts d’un de vos Pokémon.",
				'de-de': "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon graine",
				'de-de': "Samenbomben"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It may plummet from the sky. If attacked by a Spearow, it will violently shake its leaves."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89622,
				cardmarket: 279057
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89622,
				cardmarket: 279057
			}
		},
	],

}

export default card
