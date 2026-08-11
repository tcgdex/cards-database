import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [77],
	
	hp: 40,

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
				'en-us': "Ascension",
				'de-de': "Aufstieg"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Ponyta and put it onto Ponyta. (This counts as evolving Ponyta.) Shuffle your deck afterward.",
				'de-de': "Durchsuche dein Deck nach einer Karte, die sich aus Ponita entwickelt, und lege diese auf Ponita. (Dies zählt als Entwickeln von Ponita.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'de-de': "Glühen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88289,
				cardmarket: 278869
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278869,
				tcgplayer: 88289
			}
		},
	],

}

export default card
