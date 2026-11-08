import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Piloswine",
		'de-de': "Keifel"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [221],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Impaling Tusk",
				'de-de': "Durchbohrender Stoßzahn"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Charge",
				'de-de': "Dauernder Ansturm"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 30 damage plus 20 more damage for each heads. Put a damage counter on Piloswine for each heads.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte pro geworfenem \"Kopf\" zu. Lege für jeden \"Kopf\" eine Schadensmarke auf Keifel."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88115,
				cardmarket: 275301
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88115,
				cardmarket: 275301
			},
		},
	],
}

export default card
