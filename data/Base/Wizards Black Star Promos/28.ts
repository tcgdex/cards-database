import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Surfing Pikachu",
		fr: "Pikachu surfeur"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "L'été, on aperçoit souvent des bandes de Pikachu surfant sur les vagues."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"]
		},
		{
			type: "normal",
		}
	]
}

export default card
