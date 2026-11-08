import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'es-es': "Tirtouga",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'de-de': "Galapaflos"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		564,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Restored from a fossil, this Pokémon can dive to depths beyond half a mile.",
	},

	thirdParty: {
		cardmarket: 280148,
		tcgplayer: 89921
	}
}

export default card
