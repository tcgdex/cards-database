import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大岩蛇",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	description: {
		'zh-cn': "弯曲扭动巨大结实的身体，以时速８０公里的猛烈劲头向前挖进。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "轰隆崩塌" },
			effect: { 'zh-cn': "将自己牌库上方5张卡牌放于弃牌区，造成其中【撤退】所需能量数为4个的宝可梦张数×80伤害。" },
			damage: "80×",
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "重磅冲击" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [95],
}

export default card
