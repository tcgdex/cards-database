import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "鲤鱼王",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	description: {
		'zh-cn': "没力量的可怜宝可梦。即使偶尔跳得比较高，也只能勉强超过2米。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "不断跃起" },
			effect: { 'zh-cn': "抛掷硬币直到出现反面，从自己牌库上方抽取与出现正面次数相同数量的卡牌。" },
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [129],
}

export default card
