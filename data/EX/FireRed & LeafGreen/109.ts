import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Gyarados ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Twister",
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Rage",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
