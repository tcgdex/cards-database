import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Keldeo",
		fr: "Keldeo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		647,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Justified",
			},
			effect: {
				en: "This Pokémon's attacks do 50 more damage to your opponent's Darkness Pokémon (before applying Weakness and Resistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Sacred Sword",
			},
			effect: {
				en: "This Pokémon can't use Sacred Sword during your next turn.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
