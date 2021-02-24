import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Aron",
	},
	illustrator: "Yuka Morii",
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
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Tackle",
			},
			effect: {
				en: "Aron does 10 damage to itself.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
