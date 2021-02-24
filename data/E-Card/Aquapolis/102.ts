import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ponyta",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		77,
	],
	hp: 40,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
			},
			effect: {
				en: "Discard a Energy card attached to Ponyta.",
			},
			damage: 30,

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
