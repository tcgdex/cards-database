import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "月亮伊布"
	},
	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [197],
	hp: 110,
	types: ["Darkness"],
	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'zh-cn': "出奇一击"
			},
			effect: {
				'zh-cn': "给对手的1只宝可梦，造成50伤害。这个招式的伤害，不计算弱点、抗性，以及受到伤害的宝可梦身上所附加的效果。"
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'zh-cn': "漆黑之刃"
			},
			effect: {
				'zh-cn': "在下一个自己的回合，这只宝可梦无法使用招式。"
			},
			damage: "140",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
