import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [321],

	hp: 120,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Wailord does 20 damage to itself.",
				'fr-fr': "Wailord s'inflige 20 dégâts.",
				'de-de': "Wailord does 20 damage to itself."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surf"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 4,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275662,
				tcgplayer: 90457
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275662,
				tcgplayer: 90457
			}
		},
	],

}

export default card
