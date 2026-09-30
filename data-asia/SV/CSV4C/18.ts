import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "喷火驼"
	},
	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [323],
	hp: 130,
	types: ["Fire"],
	attacks: [
		{
			cost: ["Fire"],
			name: {
				'zh-cn': "火焰灼烧"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【灼伤】状态。"
			},
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'zh-cn': "火山渣加农炮"
			},
			effect: {
				'zh-cn': "若希望，可选择这只宝可梦身上附着的1个【斗】能量，放于弃牌区。在这种情况下，追加造成120伤害。"
			},
			damage: "120+",
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
