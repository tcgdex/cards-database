import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Lairon",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		305,
	],
	hp: 70,
	types: [
		"Fightning",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Land Sonic",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
			},
			damage: 40,

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
