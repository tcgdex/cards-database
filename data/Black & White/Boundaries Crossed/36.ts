import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280623
	}
}

export default card
