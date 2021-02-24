import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sharpedo",
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 70,
	types: [
		"Water",
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Slash",
			},
			effect: {
				en: "Team Aqua's Sharpedo can't attack during your next turn.",
			},
			damage: 60,

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
