import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85960,
				cardmarket: 279037
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85960,
				cardmarket: 279037
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"]
		},
	],

}

export default card
