import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Raichu ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dazzle Blast",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mega Thunderbolt",
			},
			effect: {
				en: "Discard all Energy cards attached to Raichu ex.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
