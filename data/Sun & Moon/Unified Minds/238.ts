import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Heatran-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 190,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Road",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon was on the Bench and became your Active Pokémon this turn, you may move any number of {R} Energy attached to your Pokémon to this Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steaming Stomp",
			},

			damage: 130,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hot Burn GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of {R} Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 50,

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
