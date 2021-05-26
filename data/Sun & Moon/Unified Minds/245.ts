import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mega Sableye & Tyranitar-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 280,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Greedy Crush",
			},
			effect: {
				en: "If your opponent's Pokémon-GX or Pokémon-EX is Knocked Out by damage from this attack, take 1 more Prize card.",
			},
			damage: 210,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Gigafall GX",
			},
			effect: {
				en: "If this Pokémon has at least 5 extra Energy attached to it (in addition to this attack's cost), discard the top 15 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 250,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
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
