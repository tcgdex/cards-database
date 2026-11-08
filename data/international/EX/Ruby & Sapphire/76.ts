import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'de-de': "Geckarbor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [252],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 20,

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
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275724,
				tcgplayer: 90033
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275724,
				tcgplayer: 90033
			}
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"],
			thirdParty: {
				cardmarket: 547266,
				tcgplayer: 231473
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	],

}

export default card
