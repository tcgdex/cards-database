import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Clefable",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Clefairy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shining Fingers",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Comet Punch",
			},
			effect: {
				en: "During your next turn, Extra Comet Punch does 30 damage plus 30 more damage.",
			},
			damage: 30,

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
