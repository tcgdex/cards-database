import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Bidoof",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		399,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],





}

export default card
