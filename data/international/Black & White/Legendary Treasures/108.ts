import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Tornadus",
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Wheel",
			},
			effect: {
				'en-us': "Move an Energy from 1 of your Benched Pokémon to this Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane",
			},
			effect: {
				'en-us': "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
	},

	thirdParty: {
		cardmarket: 281259,
		tcgplayer: 89976
	}
}

export default card
