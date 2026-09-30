import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "袋兽"
	},
	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [115],
	hp: 130,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "头锤"
			},
			damage: "30",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "决胜抽取"
			},
			effect: {
				'zh-cn': "从自己牌库上方抽取2张卡牌。"
			},
			damage: "60",
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
