import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Mew",
	},
	illustrator: "Masakazu Fukuda",
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
				"Colorless",
			],
			name: {
				en: "Psywave",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Devolution Beam",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of either player's Evolved Pokémon, remove the highest Stage Evolution card from that Pokémon, and put it into that player's hand.",
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
