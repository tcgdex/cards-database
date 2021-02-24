import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Seadra",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		117,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Horsea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Mud Splash",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
