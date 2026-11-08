import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'de-de': "Sheinux"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [403],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "The extension and contraction of its muscles generates electricity. It glows when in trouble."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89176,
				cardmarket: 278817
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278817,
				tcgplayer: 89176
			}
		},
	],

}

export default card
