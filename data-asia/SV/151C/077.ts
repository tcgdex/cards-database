import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小火马",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	description: {
		'zh-cn': "得到了小火马认可的人，在触摸它燃烧着的鬃毛时不会觉得烫手，真是不可思议。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "招来" },
			effect: { 'zh-cn': "从自己牌库上方抽取1张卡牌。" },
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "活蹦乱跳" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [77],
}

export default card
