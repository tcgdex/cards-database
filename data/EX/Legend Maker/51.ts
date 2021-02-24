import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Clamperl",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		366,
	],
	hp: 50,
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
				en: "Iron Defense",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Clamperl during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Clamp Splash",
			},

			damage: 10,

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
