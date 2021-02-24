import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Aggron",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 120,
	types: [
		"Fightning",
		"Darkness",
	],

	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Crush",
			},
			effect: {
				en: "Flip a coin for each Energy attached to Team Magma's Aggron. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Stream",
			},
			effect: {
				en: "You may discard any number of basic Energy cards attached to Team Magma's Aggron. If you do, this attack does 50 damage plus 20 more damage for each basic Energy card you discarded.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
