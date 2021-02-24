import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Vileplume ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Block Dust",
			},
			effect: {
				en: "As long as Vileplume ex is your Active Pokémon, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Special Formula",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If tails, the Defending Pokémon is now Confused.",
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
