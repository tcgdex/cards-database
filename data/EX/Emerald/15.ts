import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Kyogre",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scary Face",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Water Energy attached to Kyogre but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
