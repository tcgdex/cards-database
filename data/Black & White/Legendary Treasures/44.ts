import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Kyurem-EX",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Wings",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hail Blizzard",
			},
			effect: {
				en: "This Pokémon can't use Hail Blizzard during your next turn.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
