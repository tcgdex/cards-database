import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "卡咪龟",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "杰尼龟",
	},
	description: {
		'zh-cn': "会灵巧地摆动自己毛茸茸的耳朵和尾巴，借此在水中保持平衡。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "潜入巢中" },
			effect: { 'zh-cn': "选择自己弃牌区中最多3张「基本【水】能量」，在给对手看过之后，加入手牌。" },
		},
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "回转攻击" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [8],
}

export default card
