import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小磁怪",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	description: {
		'zh-cn': "用左右的组件放出的电磁波来屏蔽重力，使自己浮在空中。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "小型电击" },
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "爆炸" },
			effect: { 'zh-cn': "给这只宝可梦也造成60伤害。" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [81],
}

export default card
