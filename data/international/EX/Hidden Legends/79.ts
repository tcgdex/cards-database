import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'de-de': "Karnimani"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [158],

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
				'de-de': "Flail"
			},
			effect: {
				'en-us': "Does 10 damage for each damage counter on Totodile.",
				'fr-fr': "Inflige 10 dégâts pour chaque marqueur de dégât sur Kaiminus.",
				'de-de': "Does 10 damage for each damage counter on Totodile."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89996,
				cardmarket: 276153
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89996,
				cardmarket: 276153
			}
		},
	]
}

export default card
