import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [129],

	hp: 30,

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
				'en-us': "Flail Around",
				'fr-fr': "Fléau bougeant",
				'de-de': "Rumrudern"
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
		'en-us': "A Magikarp living for many years can leap a mountain using Splash. The move remains useless, though."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87031,
				cardmarket: 278801
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278801,
				tcgplayer: 87031
			}
		},
	],

}

export default card
