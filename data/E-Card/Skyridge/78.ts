import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Meowth",
	},
	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		52,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Swipe",
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Energy cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
