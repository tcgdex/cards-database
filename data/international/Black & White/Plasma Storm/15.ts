import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'es-es': "Chimchar",
		'it-it': "Chimchar",
		'pt-br': "Chimchar",
		'de-de': "Panflam"
	},

	illustrator: "sui",
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
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.",
	},

	thirdParty: {
		cardmarket: 280755,
		tcgplayer: 84291
	}
}

export default card
