import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lapras ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 110,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Energy Ball",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
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
				en: "Confuse Ray",
			},
			effect: {
				en: "The Defending Pokémon is now Confused",
			},
			damage: 30,

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
