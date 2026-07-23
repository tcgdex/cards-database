import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		de: "Kicklee"
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
				en: "Kick",
				fr: "Koud'pied",
				de: "Tritt"
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
				en: "High Jump Kick",
				fr: "Pied voltige",
				de: "Turmkick"
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
		en: "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe.",
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
