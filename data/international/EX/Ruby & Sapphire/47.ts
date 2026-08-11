import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'de-de': "Muntier"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [288],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez trois pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on Vigoroth.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Vigoroth.",
				'de-de': "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Muntier zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275695,
				tcgplayer: 90366
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275695,
				tcgplayer: 90366
			}
		},
	],

}

export default card
