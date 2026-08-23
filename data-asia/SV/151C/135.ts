import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷伊布",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	description: {
		'zh-cn': "细胞放出的微弱电流聚集到一起，便能释放强力的电击。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "直击弹" },
			effect: { 'zh-cn': "给对手的1只宝可梦，造成30伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: { 'zh-cn': "斗志惊雷" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦是「宝可梦【ex】・V」的话，则追加造成90伤害。" },
			damage: "90+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [135],
}

export default card
