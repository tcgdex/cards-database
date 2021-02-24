import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Shinx",
	},
	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		403,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plasma",
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Shinx.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
