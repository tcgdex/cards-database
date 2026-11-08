import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		757,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Suffocating Gas",
				'fr-fr': "Gaz Suffocant",
				'es-es': "Gas Sofocante",
				'it-it': "Gas Soffocante",
				'pt-br': "Gás Asfixiante",
				'de-de': "Würgegas"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
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

	retreat: 1,

	description: {
		'en-us': "The males will do whatever the females tell them. They give the females most of their food. Due to malnutrition, the males can't evolve.",
	},

	thirdParty: {
		cardmarket: 387997,
		tcgplayer: 195032
	}
}

export default card
