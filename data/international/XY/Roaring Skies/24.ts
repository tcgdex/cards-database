import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
		'en-us': "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches.",
	},

	thirdParty: {
		cardmarket: 282692,
		tcgplayer: 98060
	}
}

export default card
