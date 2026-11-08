import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [580],

	name: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'de-de': "Piccolente"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 50,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'es-es': "Aleteo",
				'it-it': "Alabattito",
				'pt-br': "Asa",
				'de-de': "Flattern"
			},

			damage: 20,

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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483619,
				tcgplayer: 219357
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483619,
				tcgplayer: 219357
			}
		},
	],
}

export default card
