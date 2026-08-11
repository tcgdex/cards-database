import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'de-de': "Quapsel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [60],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sleep Bubble",
				'de-de': "Schlafblase"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doubleslap",
				'de-de': "Duplexhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff frügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88255,
				cardmarket: 275345
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88255,
				cardmarket: 275345
			},
		},
	],
}

export default card
