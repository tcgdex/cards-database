import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Skwovet",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Colorless",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whimsy Tackle",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
