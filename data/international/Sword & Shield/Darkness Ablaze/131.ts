import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [878],

	name: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'es-es': "Fuerza",
				'it-it': "Forza",
				'pt-br': "Força",
				'de-de': "Stärke"
			},

			damage: 60,

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

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It digs up the ground with its trunk. It's also very strong, being able to carry loads of over five tons without any problem at all."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483534,
				tcgplayer: 219395
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483534,
				tcgplayer: 219395
			}
		},
	],
}

export default card
