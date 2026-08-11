import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
	},

	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		46,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Whether it's due to a lack of moisture or a lack of nutrients, in Alola the mushrooms on Paras don't grow up quite right.",
	},

	thirdParty: {
		cardmarket: 394687,
		tcgplayer: 197646
	}
}

export default card
