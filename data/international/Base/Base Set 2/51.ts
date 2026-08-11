import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Magmar",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 50,

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
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Magmar in order to use this attack.",
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
		'en-us': "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273974,
				tcgplayer: 42514
			}
		}
	]
}

export default card
