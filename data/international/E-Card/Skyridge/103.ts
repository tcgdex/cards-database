import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'de-de': "Sterndu"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [120],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Healing",
				'de-de': "Energieauffrischung"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Staryu for each Energy attached to it. If it has fewer damage counters than that, remove all of them.",
				'de-de': "Entferne für jede an Sterndu angelegte Energie 2 Schadensmarken von ihm. Wenn es weniger Schadensmarken hat, entferne alle."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Doubleslap",
				'de-de': "Duplexhieb"
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
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89544,
				cardmarket: 275361
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89544,
				cardmarket: 275361
			},
		},
	],
}

export default card
