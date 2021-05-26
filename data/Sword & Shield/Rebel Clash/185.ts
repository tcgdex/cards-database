import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Falinks V",
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,






	abilities: [
		{
			type: "Ability",
			name: {
				en: "Iron Defense Formation",
			},
			effect: {
				en: "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
			},
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
			},
			damage: 210,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
