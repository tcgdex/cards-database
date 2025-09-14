import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Dugtrio",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Lie Low",
			},
			effect: {
				en: "All damage done to Brock's Dugtrio during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Earthdrill",
			},
			effect: {
				en: "This attack can't be used unless Brock's Dugtrio used its Lie Low attack last turn.",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274290,
		tcgplayer: 83962
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
