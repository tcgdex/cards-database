import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "嘎啦嘎啦",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "卡拉卡拉",
	},
	description: {
		'zh-cn': "进化后，与原本戴在头上的母亲头骨完全融为一体，而且性格也变得十分凶暴。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "骨棒投掷" },
			effect: { 'zh-cn': "给对手的1只备战宝可梦，也造成30伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "潜力" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用招式。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [105],
}

export default card
