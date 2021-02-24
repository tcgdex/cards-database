import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Yamask",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		562,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Astonish",
			},
			effect: {
				en: "Flip a coin. If heads, choose a card at random from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],





}

export default card
