import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Claydol",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Baltoy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Pull",
			},
			effect: {
				en: "As long as Claydol is your Active Pokémon, each player's Evolved Pokémon pays Colorless more Energy to use its attacks.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Muddy Eye",
			},
			effect: {
				en: "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokémon.",
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
