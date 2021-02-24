import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Primeape",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Mankey",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss",
			},
			effect: {
				en: "You may discard from your hand as many Technical Machine and Pokémon Tool cards as you like. This attack does 30 damage times the number of cards you discarded.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Low Kick",
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
