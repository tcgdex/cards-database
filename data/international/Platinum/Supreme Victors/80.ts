import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'de-de': "Rizeros"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'de-de': "Furienschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-pierre",
				'de-de': "Rollende Felsen"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,

	description: {
		'en-us': "Standing on its hind legs freed its forelegs and made it smarter. It is very forgetful, however."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88735,
				cardmarket: 278771
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278771,
				tcgplayer: 88735
			}
		},
	],

}

export default card
