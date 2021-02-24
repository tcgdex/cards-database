import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gardevoir & Sylveon-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 260,
	types: [
		"Fairy",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fairy Song",
			},
			effect: {
				en: "Search your deck for up to 2 Fairy Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Kaleidostorm",
			},
			effect: {
				en: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like.",
			},
			damage: 150,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Magical Miracle-GX",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles their hand into their deck. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],




}

export default card
