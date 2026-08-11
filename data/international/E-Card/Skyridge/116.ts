import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [193],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Yanma.",
				'de-de': "Wird eine Münze. Bei \"Kopf\" verhindere während des nächsten Zuges alle Auswirkungen von Angriffen (einschließlich Schaden), die Yanma zugefügt werden."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Triple Smash",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage plus 10 more damage for each heads.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenem \"Kopf\" zu."
			},
			damage: "20+",

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
				tcgplayer: 90682,
				cardmarket: 275374
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90682,
				cardmarket: 275374
			},
		},
	],
}

export default card
