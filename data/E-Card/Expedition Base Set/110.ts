import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Geodude",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		74,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Hurl",
			},
			effect: {
				en: "Don't apply Resistance.",
			},
			damage: 10,

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
