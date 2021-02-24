import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Vanilluxe",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillish",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bitter Cold",
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Frost Smash",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
