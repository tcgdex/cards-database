import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "袋兽ex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "ex",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "三重抽取" },
			effect: { 'zh-cn': "从自己牌库上方抽取3张卡牌。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "机关枪拳" },
			effect: { 'zh-cn': "抛掷4次硬币，造成正面次数×100伤害。" },
			damage: "100×",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [115],
}

export default card
