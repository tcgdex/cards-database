import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Cherubi",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		420,
	],

	hp: 40,

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
				'en-us': "Double Spin",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The small ball is not only filled with nutrients, it is also tasty. Starly try to peck it off.",
	},

	thirdParty: {
		cardmarket: 281155,
		tcgplayer: 84266
	}
}

export default card
