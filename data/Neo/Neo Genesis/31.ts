import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Croconaw",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		159,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Jaw Clamp",
			},
			effect: {
				en: "Until the end of your opponent's next turn, as long as Croconaw is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
