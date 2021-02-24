import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lucario & Melmetal-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 260,
	types: [
		"Metal",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Fist",
			},
			effect: {
				en: "Search your deck for a Metal Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
			},

			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Full Metal Wall-GX",
			},
			effect: {
				en: "For the rest of this game, your Metal Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance). If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			},

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
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
