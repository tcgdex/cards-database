import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Kyogre",
		'fr-fr': "Kyogre",
		'de-de': "Kyogre"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ram"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage isn't affected by Resistance."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 86547,
		cardmarket: 276517
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86547,
				cardmarket: 276517
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86547,
				cardmarket: 276517
			},
		}
	],
}

export default card
