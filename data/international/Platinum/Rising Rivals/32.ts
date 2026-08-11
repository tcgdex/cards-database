import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Rhyperior E4",
		'fr-fr': "Rhinastoc  Niv. 55",
		'de-de': "Rihornior 4"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [464],
	hp: 100,
	types: [
		"Fighting"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Double Lariat",
				'fr-fr': "Double lasso",
				'de-de': "Doppel-Lasso"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
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
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278606,
				tcgplayer: 88748
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278606,
				tcgplayer: 88748
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 125053
			}
		}
	]
}

export default card
