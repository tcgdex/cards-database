import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "岩狗狗"
	},
	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [744],
	hp: 60,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "咬住"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
