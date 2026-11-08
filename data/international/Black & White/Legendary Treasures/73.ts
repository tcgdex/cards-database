import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Solosis",
	},

	illustrator: "HiRON",
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
		'en-us': "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others",
	},

	thirdParty: {
		cardmarket: 281224,
		tcgplayer: 89423
	}
}

export default card
