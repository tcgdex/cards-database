import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Igglybuff",
	},
	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		174,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Heal",
			},
			effect: {
				en: "Choose 1 of your Pokémon with an Energy card attached to it. Remove 1 damage counter from that Pokémon.",
			},

		},
	],






}

export default card
