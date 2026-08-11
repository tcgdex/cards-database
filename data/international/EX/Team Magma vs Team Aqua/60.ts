import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Baltoy",
		'fr-fr': "Balbuto de Team Magma",
		'de-de': "Team Magmas Puppance"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [343],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double tour",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275837,
				tcgplayer: 89822
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275837,
				tcgplayer: 89822
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871830,
				tcgplayer: 477448
			}
		}
	],

}

export default card
