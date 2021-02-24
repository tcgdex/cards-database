import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Rapidash",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		78,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ponyta",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fiery Aura",
			},
			effect: {
				en: "As long as Rapidash is your Active Pokémon, put 4 damage counters instead of 2 on Burned Pokémon between turns.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
