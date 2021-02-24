import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Onix",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Throw",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Tunneling",
			},
			effect: {
				en: "Choose up to 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Onix can't attack during your next turn.",
			},

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
