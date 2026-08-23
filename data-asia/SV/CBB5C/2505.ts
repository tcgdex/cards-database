import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "苍炎刃鬼",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "炭小侍",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "烈焰咒术" },
			effect: { 'zh-cn': "将对手所有宝可梦身上附着的特殊能量，全部放于弃牌区。" },
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "黑炎切割" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用招式。" },
			damage: 160,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [937],
}

export default card
