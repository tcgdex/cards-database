import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大嘴蝠",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "超音蝠",
	},
	description: {
		'zh-cn': "用小而灵活的脚走路。会悄悄接近正在睡觉的猎物，用尖牙咬住对方吸取血液。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "直击飞行" },
			effect: { 'zh-cn': "给对手的1只宝可梦，造成40伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [42],
}

export default card
