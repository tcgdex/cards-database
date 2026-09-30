import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "一对鼠"
	},
	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [924],
	hp: 30,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "招来"
			},
			effect: {
				'zh-cn': "从自己牌库上方抽取2张卡牌。"
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "重掴"
			},
			damage: "30",
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
