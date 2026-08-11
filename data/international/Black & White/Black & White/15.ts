import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'it-it': "Tepig",
		'pt-br': "Tepig",
		'de-de': "Floink"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		498,
	],

	hp: 60,

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
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
	},

	thirdParty: {
		cardmarket: 279753,
		tcgplayer: 89879
	}
}

export default card
