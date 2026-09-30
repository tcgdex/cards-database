import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "啪嚓海胆"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [871],
	hp: 80,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'zh-cn': "尖刺粉碎"
			},
			effect: {
				'zh-cn': "选择对手战斗宝可梦身上附着的1个能量，放于弃牌区。"
			},
			damage: "70",
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
