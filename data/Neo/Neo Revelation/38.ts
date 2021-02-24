import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Stantler",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		234,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Terrorize",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic, choose 1 of its attacks. That Pokémon can't use that attack during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overhead Toss",
			},
			effect: {
				en: "If you have any Benched Pokémon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
