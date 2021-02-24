import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Girafarig",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		203,
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
				en: "Synchronized Search",
			},
			effect: {
				en: "If Girafarig and the Defending Pokémon have the same amount of Energy attached to them, pick any 1 card from your deck and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Breaking Impact",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Colorless Energy in that Pokémon's Retreat Cost to that Pokémon (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)\"",
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
