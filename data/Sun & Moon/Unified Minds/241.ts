import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Raichu & Alolan Raichu-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 260,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tandem Shock",
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 80 more damage, and your opponent's Active Pokémon is now Paralyzed.",
			},
			damage: 80,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Ride GX",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If this Pokémon has at least 2 extra {L} Energy attached to it (in addition to this attack's cost), this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 150,

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
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
