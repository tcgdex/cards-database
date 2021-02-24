import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Wobbuffet",
	},
	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
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
				en: "Call for Friends",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Retaliate",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Wobbuffet.",
			},
			damage: 10,

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
