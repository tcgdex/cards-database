import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Magma Punch",
				'fr-fr': "Poing Magma",
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
		'en-us': "When it breathes deeply, heat waves form around its body, making it hard to see clearly.",
	},

	thirdParty: {
		cardmarket: 280459,
		tcgplayer: 87053
	}
}

export default card
