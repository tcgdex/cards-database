import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'de-de': "Schiggy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [7],

	hp: 60,

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
				'en-us': "Skull Bash",
				'fr-fr': "Coud'krane",
				'de-de': "Skull Bash"
			},

			damage: 10,

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
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shelters itself in its shell, then strikes back with spouts of water at every opportunity."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89495,
				cardmarket: 278517
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278517,
				tcgplayer: 89495
			}
		}
	],

}

export default card
