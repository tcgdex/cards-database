import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Scyther",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Swords Dance",
			},
			effect: {
				en: "During your next turn, Scyther's Slash attack's base damage is 60 instead of 30.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
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
