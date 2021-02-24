import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Piloswine",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		221,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Swinub",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tonnage",
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage. If you do, Piloswine does 30 damage to itself.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
