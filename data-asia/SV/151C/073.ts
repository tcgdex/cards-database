import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "毒刺水母",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "玛瑙水母",
	},
	description: {
		'zh-cn': "８０根触手伸缩自如。会像撒网那样伸开触手抓住猎物并刺入毒针。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "毒鞭" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【中毒】状态。" },
			damage: 30,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "恐慌触手" },
			effect: { 'zh-cn': "抛掷硬币直到出现反面，造成正面次数×90伤害。如果最初抛掷的硬币为反面的话，则令对手的战斗宝可梦陷入【混乱】状态。" },
			damage: "90×",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [73],
}

export default card
