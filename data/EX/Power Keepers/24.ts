import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Wobbuffet",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flip Over",
			},
			effect: {
				en: "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
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
