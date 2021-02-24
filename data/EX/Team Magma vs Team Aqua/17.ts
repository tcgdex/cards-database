import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Seviper",
	},
	illustrator: "Jungo Suzuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for a Grass Basic Pokémon or Basic Pokémon with Team Aqua in its name and put it onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thick Poison",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned. If tails, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

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
