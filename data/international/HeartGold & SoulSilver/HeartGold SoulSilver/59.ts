import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [152],

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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch’herbe",
				'de-de': "Rasierblatt"
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
		'en-us': "Its pleasantly aromatic leaf has the ability to check the humidity and temperature."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84279,
				cardmarket: 279031
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84279,
				cardmarket: 279031
			}
		},
	],

}

export default card
