import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia"
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aeroblast",
				fr: "Aeroblast"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
