import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Machop",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		66,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knuckle Punch",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
			},
			effect: {
				en: "Does 30 damage minus 10 damage for each damage counter on Machop.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
