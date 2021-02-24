import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Mew",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psywave",
			},
			effect: {
				en: "Does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Devolution Beam",
			},
			effect: {
				en: "Choose an Evolved Pokémon (your own or your opponent's). Return the highest Stage Evolution card on that Pokémon to its player's hand. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it).",
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
