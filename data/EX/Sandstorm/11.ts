import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Seviper",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deadly Poison",
			},
			effect: {
				en: "You may discard a Grass Energy card attached to Seviper. If you do, the Defending Pokémon is now Poisoned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Poison",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned.",
			},
			damage: 20,

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
