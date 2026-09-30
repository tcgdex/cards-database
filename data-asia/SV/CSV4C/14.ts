import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "六尾"
	},
	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [37],
	hp: 60,
	types: ["Fire"],
	attacks: [
		{
			cost: ["Fire"],
			name: {
				'zh-cn': "烈焰"
			},
			damage: "10",
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				'zh-cn': "奇异之光"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
