import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Weezing",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Poison Breath",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Explosion",
			},
			effect: {
				en: "Weezing does 90 damage to itself, and don't apply Weakness to this damage.",
			},
			damage: 90,

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
