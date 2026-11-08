import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Chimchar",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Scratch",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	description: {
		'en-us': "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278413,
				tcgplayer: 84287
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278413,
				tcgplayer: 84287
			}
		},
	],
}

export default card
