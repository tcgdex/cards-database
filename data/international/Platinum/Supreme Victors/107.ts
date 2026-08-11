import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'de-de': "Goldini"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [118],

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
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Goldeen.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissirène.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Goldini zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'de-de': "Furienschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Though it appears very elegant when swimming with fins unfurled, it can jab powerfully with its horn."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85809,
				cardmarket: 278798
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278798,
				tcgplayer: 85809
			}
		},
	],

}

export default card
