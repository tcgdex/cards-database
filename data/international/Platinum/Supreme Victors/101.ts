import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'de-de': "Glibunkel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [453],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'de-de': "Haken"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing en tire-bouchon",
				'de-de': "Korkenzieherhieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It rarely fights fairly, but that is strictly to ensure survival. It is popular as a mascot."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84477,
				cardmarket: 278792
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278792,
				tcgplayer: 84477
			}
		},
	],

}

export default card
