import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Starmie",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Burst",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of Energy cards attached to Starmie and the Defending Pokémon.",
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
				en: "Star Back",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Pokémon.",
			},
			damage: 40,

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
