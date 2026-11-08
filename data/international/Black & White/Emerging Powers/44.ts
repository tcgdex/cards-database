import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
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
		'en-us': "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.",
	},

	thirdParty: {
		cardmarket: 280008,
		tcgplayer: 85846
	}
}

export default card
