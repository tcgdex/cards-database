import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 70,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Charge",
				'de-de': "Ram"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier",
				'de-de': "Metal Claw"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275684,
				tcgplayer: 86573
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275684,
				tcgplayer: 86573
			}
		},
	],

}

export default card
