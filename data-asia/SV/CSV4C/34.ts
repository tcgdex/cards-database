import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "颤弦蝾螈"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [849],
	hp: 140,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "瞪眼"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。"
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'zh-cn': "混合高音"
			},
			effect: {
				'zh-cn': "追加造成自己备战宝可梦的属性种类数量×30伤害。"
			},
			damage: "50+",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
