import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [131],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Assist",
				'de-de': "Assistent"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'de-de': "Durchsuche dein Deck nach einer Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' schläft das verteidigende Pokémon jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86616,
				cardmarket: 275329
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86616,
				cardmarket: 275329
			},
		},
	],
}

export default card
