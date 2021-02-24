import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Ariados",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Entangle",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon, then flip a coin. If heads, the new Defending Pokémon is now Paralyzed.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Bind",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon can't retreat until the end of your opponent's next turn and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing.",
			},
			damage: 40,

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
