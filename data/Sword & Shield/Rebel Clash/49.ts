import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Inteleon V",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Snipe Shot",
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Report",
			},
			effect: {
				en: "Your opponent reveals their hand.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
