import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Though small in stature, it is powerful enough to easily heft and throw a number of Geodude at once.",
	},

	thirdParty: {
		cardmarket: 281068,
		tcgplayer: 86999
	}
}

export default card
