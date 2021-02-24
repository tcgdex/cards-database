import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Pheromosa & Buzzwole-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 260,
	types: [
		"Grass",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Jet Punch",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Elegant Sole",
			},
			effect: {
				en: "During your next turn, this Pokémon's Elegant Sole attack's base damage is 60.",
			},
			damage: 190,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Beast Game-GX",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card. If this Pokémon has at least 7 extra Energy attached to it (in addition to this attack's cost), take 3 more Prize cards instead. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
