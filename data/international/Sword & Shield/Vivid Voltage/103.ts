import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [261],

	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'es-es': "Patada Trasera",
				'it-it': "Retrocalcio",
				'pt-br': "Chute Traseiro",
				'de-de': "Rückwärtskick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It has a very tenacious nature. Its acute sense of smell lets it chase a chosen prey without ever losing track."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511935,
				tcgplayer: 226555
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511935,
				tcgplayer: 226555
			}
		},
	],
}

export default card
