import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee",
		'de-de': "Kicklee"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [106],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'pied",
				'de-de': "Tritt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied voltige",
				'de-de': "Turmkick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86108,
				cardmarket: 279701
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86108,
				cardmarket: 279701
			},
		},
	],

}

export default card
