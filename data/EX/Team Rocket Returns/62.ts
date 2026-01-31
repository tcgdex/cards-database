import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Larvitar",
		de: "Larvitar"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Fury Attack",
				de: "Fury Attack"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				de: "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276354,
		tcgplayer: 86637
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

