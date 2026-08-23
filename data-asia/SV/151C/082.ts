import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "三合一磁怪",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "小磁怪",
	},
	description: {
		'zh-cn': "３只小磁怪由强大的磁力结合在一起。一靠近它就会感到强烈的耳鸣。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "物品磁吸" },
			effect: { 'zh-cn': "选择自己弃牌区中最多2张物品，在给对手看过之后，加入手牌。" },
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: { 'zh-cn': "伏特头击" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [82],
}

export default card
