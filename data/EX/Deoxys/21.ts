import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Pelipper",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bay Dance",
			},
			effect: {
				en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance).",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
			},
			damage: 50,

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
