import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon and heal all damage from this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its body is torn, it can grow back if the red core remains. The core flashes at midnight.",
	},

	thirdParty: {
		cardmarket: 280248,
		tcgplayer: 89553
	}
}

export default card
