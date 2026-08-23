import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "派拉斯",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	description: {
		'zh-cn': "是一种叫做冬虫夏草的蘑菇在控制着虫子。虫子的意志会被它忽视。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "踩" },
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "孢子弹" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【睡眠】状态。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [46],
}

export default card
