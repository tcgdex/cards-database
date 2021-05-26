import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Riolu",
	},
	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fighting",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Best Punch",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
