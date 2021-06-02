import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Delibird",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		225,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Present",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Ball",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],





}

export default card
