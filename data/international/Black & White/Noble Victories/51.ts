import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'es-es': "Duosion",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'de-de': "Mitodos"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Since they have two divided brains, at times they suddenly try to take two different actions at once.",
	},

	thirdParty: {
		cardmarket: 280174,
		tcgplayer: 85017
	}
}

export default card
