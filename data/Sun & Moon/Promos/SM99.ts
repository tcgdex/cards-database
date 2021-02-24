import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Mimikyu",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Filch",
			},
			effect: {
				en: "Draw 2 cards.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Copycat",
			},
			effect: {
				en: "If your opponent's Pokémon used an attack that isn't a GX attack during their last turn, use it as this attack.",
			},

		},
	],






}

export default card
