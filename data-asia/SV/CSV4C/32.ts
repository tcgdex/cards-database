import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "卡璞・鸣鸣ex"
	},
	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [785],
	hp: 210,
	types: ["Lightning"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'zh-cn': "复仇冲击"
			},
			effect: {
				'zh-cn': "在上一个对手的回合，如果因为招式的伤害，而导致自己的宝可梦【昏厥】的话，则追加造成90伤害，令对手的战斗宝可梦陷入【麻痹】状态。"
			},
			damage: "30+",
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'zh-cn': "激电流"
			},
			effect: {
				'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。"
			},
			damage: "180",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
