import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slowpoke & Psyduck-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 250,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ditch and Splash",
			},
			effect: {
				en: "Discard any number of Supporter cards from your hand. This attack does 40 damage for each card you discarded in this way.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Thrilling Times GX",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 100 more damage. If this Pokémon has at least 6 extra {W} Energy attached to it (in addition to this attack's cost), flip 10 coins instead, and this attack does 100 more damage for each heads. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 10,

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
