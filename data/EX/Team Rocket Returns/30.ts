import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Ariados",
	},
	illustrator: "Kyoko Koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 70,
	types: [
		"Grass",
		"Darkness",
	],
	evolveFrom: {
		en: "Spinarak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Poison Breath",
			},
			effect: {
				en: "Each Defending Pokémon is now Poisoned.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Breaking Impact",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage for each Colorless Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

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
