import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "一家鼠ex"
	},
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [925],
	hp: 230,
	types: ["Colorless"],
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "团结一致"
			},
			effect: {
				'zh-cn': "当这只宝可梦，在战斗场上受到对手宝可梦的招式的伤害时，将自己场上「一对鼠」和「一家鼠（包含『宝可梦【ex】』）」的数量×3个伤害指示物，放置于使用了招式的宝可梦身上。"
			},
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "贪婪门牙"
			},
			effect: {
				'zh-cn': "从自己牌库上方抽取2张卡牌。"
			},
			damage: "120",
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
