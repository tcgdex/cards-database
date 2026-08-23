import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "伊布",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "觉醒" },
			effect: { 'zh-cn': "从自己牌库中选择1张从这只宝可梦进化而来的卡牌，放于这只宝可梦身上进行进化。并重洗牌库。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "电光一闪" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成20伤害。" },
			damage: "20+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [133],
}

export default card
