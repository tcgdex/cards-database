import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "巴布土拨ex"
	},
	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [923],
	hp: 300,
	types: ["Lightning"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "电气踢"
			},
			damage: "60",
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'zh-cn': "闪电打击"
			},
			effect: {
				'zh-cn': "将这只宝可梦身上附着的2个【雷】能量放于弃牌区，给对手的1只宝可梦，造成220伤害。[备战宝可梦不计算弱点、抗性。]"
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
}

export default card
