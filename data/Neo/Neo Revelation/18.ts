import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ho-oh",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
			},
			effect: {
				en: "This attack does 30 damage plus 10 more for each type of Basic Energy card if any, attached to Ho-oh",
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
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
