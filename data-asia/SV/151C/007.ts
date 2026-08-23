import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "杰尼龟",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		'zh-cn': "当它遇到危险的时候，会将四肢收回龟壳里保护自己，同时从嘴里喷出水来。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "缩入壳中" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害。" },
		},
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "火箭头锤" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [7],
}

export default card
