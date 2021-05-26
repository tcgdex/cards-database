import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Salamence VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 320,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Salamence V",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sonic Double",
			},
			effect: {
				en: "This attack does 40 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Wings",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Max Wings.",
			},
			damage: 240,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
