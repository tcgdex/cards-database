import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'it-it': "Skrelp",
		'pt-br': "Skrelp",
		'de-de': "Algitt"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		690,
	],

	hp: 60,

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
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'es-es': "Garfio",
				'it-it': "Uncino",
				'pt-br': "Gancho",
				'de-de': "Haken"
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
		'en-us': "It looks just like rotten kelp. It hides from foes while storing up power for its evolution.",
	},

	thirdParty: {
		cardmarket: 355571,
		tcgplayer: 165702
	}
}

export default card
