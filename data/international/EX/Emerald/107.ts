import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'de-de': "Porenta"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
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
				'en-us': "Spearhead",
				'fr-fr': "Meneur",
				'de-de': "Spearhead"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nosedive",
				'fr-fr': "Descendre en piqué",
				'de-de': "Nosedive"
			},
			effect: {
				'en-us': "Farfetch'd does 10 damage to itself.",
				'fr-fr': "Canarticho s'inflige 10 dégâts.",
				'de-de': "Farfetch'd does 10 damage to itself."
			},
			damage: 30,

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

	thirdParty: {
		tcgplayer: 85385,
		cardmarket: 276618
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85385,
				cardmarket: 276618
			},
		},
	],
}

export default card
