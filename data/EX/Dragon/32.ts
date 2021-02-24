import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Gyarados",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Crush",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon. Discard an Energy card from each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
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





}

export default card
