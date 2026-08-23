import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "九尾ex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "六尾",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "热风" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【灼伤】状态。" },
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless"],
			name: { 'zh-cn': "炽火延烧" },
			effect: { 'zh-cn': "如果自己的手牌张数与对手的手牌张数相同的话，则追加造成140伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [38],
}

export default card
