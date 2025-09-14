import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Exeggutor",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Exchange",
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 5 cards.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274180,
		tcgplayer: 85294
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

