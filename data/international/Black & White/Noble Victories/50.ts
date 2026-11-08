import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'es-es': "Solosis",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'de-de': "Monozyto"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		577,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
			},

			damage: 10,

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
		'en-us': "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.",
	},

	thirdParty: {
		cardmarket: 280173,
		tcgplayer: 89421
	}
}

export default card
