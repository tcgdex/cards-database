import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大葱鸭",
	},

	illustrator: "KG-2000",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	description: {
		'zh-cn': "用植物的茎来战斗。茎的挥舞方式存在着好几种不同的流派。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "背来" },
			effect: { 'zh-cn': "从自己牌库上方抽取2张卡牌。" },
		},
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "甩葱殴打" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [83],
}

export default card
