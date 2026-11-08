import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Punch",
				'fr-fr': "Poing de Feu",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its entire body is burning. When it breathes, the temperature rises. When it sneezes, flames shoot out!",
	},

	thirdParty: {
		cardmarket: 394822,
		tcgplayer: 197652
	}
}

export default card
