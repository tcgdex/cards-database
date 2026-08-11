import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		527,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its habitat is dark forests and caves. It emits ultrasonic waves from its nose to learn about its surroundings.",
	},

	thirdParty: {
		cardmarket: 279788,
		tcgplayer: 90624
	}
}

export default card
