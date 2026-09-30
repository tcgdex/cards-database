import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "呆火驼"
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [322],
	hp: 80,
	types: ["Fire"],
	attacks: [
		{
			cost: ["Fire"],
			name: {
				'zh-cn': "致焦"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【灼伤】状态。"
			},
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'zh-cn': "高温爆破"
			},
			damage: "60",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
