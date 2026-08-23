import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷伊布V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "闪电之矢" },
			effect: { 'zh-cn': "给对手的1只宝可梦，造成20点伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: { 'zh-cn': "飞弹针" },
			effect: { 'zh-cn': "抛掷4次硬币，造成正面次数×60点伤害。" },
			damage: "60×",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 0,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [135],
}

export default card
