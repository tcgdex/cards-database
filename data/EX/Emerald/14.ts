import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Groudon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eruption",
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
