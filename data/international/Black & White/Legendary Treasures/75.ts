import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Duosion",
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Solosis",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
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
		'en-us': "Since they have two divided brains, at times they suddenly try to take two different actions at once.",
	},

	thirdParty: {
		cardmarket: 281226,
		tcgplayer: 85019
	}
}

export default card
