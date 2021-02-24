import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Muk",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stench",
			},
			effect: {
				en: "As long as Muk is your Active Pokémon, each player's Pokémon can't use any Poké-Powers.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
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
