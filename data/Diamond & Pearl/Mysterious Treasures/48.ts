import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Gabite",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		444,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Gible",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gather Up",
			},
			effect: {
				en: "Search your discard pile for up to 2 Energy cards, show them to your opponent, and put them into your hand.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Marvelous Shine",
			},
			effect: {
				en: "Flip a coin. If heads, put 4 damage counters on 1 of your opponent's Pokémon. If tails, remove 4 damage counters from 1 of your Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],





}

export default card
