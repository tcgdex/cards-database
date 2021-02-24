import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Vanillish",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillite",
	},



	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Freezing Headbutt",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			},
			damage: 30,

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
