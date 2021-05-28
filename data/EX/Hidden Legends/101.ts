import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Wigglytuff ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jigglypuff",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy Song",
			},
			effect: {
				en: "Each Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each of your Benched Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
