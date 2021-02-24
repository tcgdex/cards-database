import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Reshiram & Charizard-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 270,
	types: [
		"Fire",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Outrage",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Strike",
			},
			effect: {
				en: "This Pokémon can't use Flare Strike during your next turn.",
			},
			damage: 230,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Double Blaze-GX",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra Fire Energy attached to it (in addition to this attack's cost), this attack does 100 more damage, and this attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
