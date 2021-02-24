import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Cradily",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Lileep",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Super Suction Cups",
			},
			effect: {
				en: "As long as Cradily is your Active Pokémon, your opponent's Pokémon can't retreat.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lure Poison",
			},
			effect: {
				en: "Before using this effect, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon, if any. The Defending Pokémon is now Poisoned.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
			},
			effect: {
				en: "Remove 2 damage counters from Cradily (remove 1 if there is only 1).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
