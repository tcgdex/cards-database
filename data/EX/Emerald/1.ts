import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Blaziken",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Blaze",
			},
			effect: {
				en: "As long as Blaziken's remaining HP is 40 or less, Blaziken does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
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

			name: {
				en: "Damage Burn",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

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
