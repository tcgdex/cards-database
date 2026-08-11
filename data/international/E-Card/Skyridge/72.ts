import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Ledyba",
		'de-de': "Ledyba"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [165],

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
				'en-us': "Teary Eyes",
				'de-de': "Tränende Augen"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Ledyba by attacks is reduced by 20.",
				'de-de': "Jeder Schaden, der Ledyba im nächsten Zug deines Gegners durch Angriffe zugefügt wird, wird um 20 reduziert."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Quick Turn",
				'de-de': "Schnelldrehung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86701,
				cardmarket: 275330
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86701,
				cardmarket: 275330
			},
		},
	],
}

export default card
