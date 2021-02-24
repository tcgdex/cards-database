import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Aron",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		304,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Aron.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
