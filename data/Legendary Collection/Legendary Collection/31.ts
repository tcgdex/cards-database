import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Nidoking",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thrash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Toxic",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
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

	thirdParty: {
		cardmarket: 274796
	}
}

export default card
