import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'de-de': "Machollo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'poing",
				'de-de': "Hieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'pied",
				'de-de': "Kicks"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It's said that not even pro wrestlers can take down a Machop.",
		'fr-fr': "Il est dit que même les lutteurs professionnels ne parviennent pas à battre un Machoc."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274112,
				tcgplayer: 86987
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274112,
				tcgplayer: 86987
			}
		}
	]
}

export default card
