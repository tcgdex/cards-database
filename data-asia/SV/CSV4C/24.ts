import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "几何雪花"
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [615],
	hp: 90,
	types: ["Water"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "快速冻结"
			},
			effect: {
				'zh-cn': "如果是后攻玩家的最初回合的话，则令对手的战斗宝可梦陷入【麻痹】状态。"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
