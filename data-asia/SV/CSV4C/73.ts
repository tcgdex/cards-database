import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "盐石垒"
	},
	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [933],
	hp: 100,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'zh-cn': "盐巴加农炮"
			},
			effect: {
				'zh-cn': "抛掷3次硬币，造成正面次数×60伤害。"
			},
			damage: "60×",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
