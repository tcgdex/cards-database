import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Heracross",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Angry Horn",
			},
			effect: {
				en: "If there are 4 or more damage counters on Heracross, this attack's base damage is 50 instead of 30.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
