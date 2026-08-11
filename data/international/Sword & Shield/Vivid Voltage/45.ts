import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [100],

	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511645,
				tcgplayer: 226435
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511645,
				tcgplayer: 226435
			}
		},
	],
}

export default card
