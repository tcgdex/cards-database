import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Chimecho",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
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
				en: "Resonate",
			},
			effect: {
				en: "Your opponent switches each Defending Pokémon with his or her Benched Pokémon. If your opponent has only 1 Benched Pokémon, you choose the Defending Pokémon to switch.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Sound",
			},
			effect: {
				en: "Remove 3 damage counters from each of your Active Pokémon. Each Defending Pokémon is now Asleep.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
