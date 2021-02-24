import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Celebi",
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Press",
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to your opponent’s Active Pokémon.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Amazing Bloom",
			},
			effect: {
				en: "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
