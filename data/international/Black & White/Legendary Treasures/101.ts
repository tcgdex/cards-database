import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "White Kyurem-EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Stream",
			},
			effect: {
				'en-us': "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Burn",
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281252
	}
}

export default card
