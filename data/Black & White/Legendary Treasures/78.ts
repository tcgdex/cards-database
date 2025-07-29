import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Meloetta",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 80,

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
				en: "Psychic",
			},
			effect: {
				en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 281134
	}
}

export default card
