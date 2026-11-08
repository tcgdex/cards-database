import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Reuniclus",
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		579,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duosion",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Future Sight",
			},
			effect: {
				'en-us': "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Net Force",
			},
			effect: {
				'en-us': "Does 40 damage times the number of Reuniclus you have in play.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.",
	},

	thirdParty: {
		cardmarket: 281227,
		tcgplayer: 88724
	}
}

export default card
