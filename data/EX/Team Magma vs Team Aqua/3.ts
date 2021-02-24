import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Kyogre",
	},
	illustrator: "K. Hoshiba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 100,
	types: [
		"Water",
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Saver",
			},
			effect: {
				en: "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Aqua in its name is 3 or less, Team Aqua's Kyogre can't attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Trip",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
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
				en: "Aqua Smash",
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
