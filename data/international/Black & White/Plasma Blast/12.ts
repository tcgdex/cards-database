import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		636,
	],

	hp: 70,

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

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Said to have been born from the sun, it spews fire from its horns and encases itself in a cocoon of fire when it evolves.",
	},

	thirdParty: {
		cardmarket: 281033,
		tcgplayer: 86631
	}
}

export default card
