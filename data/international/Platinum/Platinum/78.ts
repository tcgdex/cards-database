import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'de-de': "Zirpurze"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [401],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Lullaby",
				'fr-fr': "Comptine",
				'de-de': "Lullaby"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86528,
				cardmarket: 278499
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278499,
				tcgplayer: 86528
			}
		}
	],

}

export default card
