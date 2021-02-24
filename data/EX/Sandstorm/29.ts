import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Arbok",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ekans",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
			},
			effect: {
				en: "As long as Arbok is your Active Pokémon, any damage to your Pokémon done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
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
				en: "Toxic",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
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
