import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mewtwo Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 80,
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
				en: "Energy Absorption",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Mewtwo Star.",
			},

		},
		{
			cost: [
				"Psychic",
				"Fire",
				"Lightning",
			],
			name: {
				en: "Psychic Star",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, discard all Energy attached to Mewtwo Star and this attack does 50 damage plus 50 more damage.",
			},
			damage: 50,

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
