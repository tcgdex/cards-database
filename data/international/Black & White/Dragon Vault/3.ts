import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
			},
			effect: {
				'en-us': "Discard the top card of your deck.",
				'fr-fr': "Défaussez la carte du dessus de votre deck.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
	},

	thirdParty: {
		cardmarket: 281003,
		tcgplayer: 84902
	}
}

export default card
