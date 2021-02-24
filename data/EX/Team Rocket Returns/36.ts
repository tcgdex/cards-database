import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Gyarados",
	},
	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 80,
	types: [
		"Water",
		"Darkness",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Streak",
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
