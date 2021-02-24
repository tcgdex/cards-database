import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Exeggutor",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psychic Exchange",
			},
			effect: {
				en: "Shuffle your hand into your deck. Draw up to 8 cards.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
			},
			effect: {
				en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads",
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





}

export default card
