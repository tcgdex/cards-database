import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [749],

	name: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'es-es': "Mudbray",
		'it-it': "Mudbray",
		'pt-br': "Mudbray",
		'de-de': "Pampuli"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
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

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Loads weighing up to 50 times as much as its own body weight pose no issue for this Pokémon. It's skilled at making use of mud."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511900,
				tcgplayer: 226538
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511900,
				tcgplayer: 226538
			}
		},
	],
}

export default card
