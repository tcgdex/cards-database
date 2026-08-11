import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Snorunt",
		'de-de': "Schneppke"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [361],
	
	hp: 50,

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
				'en-us': "Ice Breath",
				'de-de': "Eishauch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Double Headbutt",
				'de-de': "Doppelte Kopfnuss"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said that several Snorunt gather under giant leaves and live together in harmony."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89403,
				cardmarket: 278947
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278947,
				tcgplayer: 89403
			}
		},
	],

}

export default card
