import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'de-de': "Lorblatt"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [153],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'de-de': "Einhämmern"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore health.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83749,
				cardmarket: 279683
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83749,
				cardmarket: 279683
			},
		},
	],

}

export default card
