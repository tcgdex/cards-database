import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "煤炭龟",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: { 'zh-cn': "甲壳冲撞" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。" },
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "火焰旋涡" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的2个能量，放于弃牌区。" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [324],
}

export default card
