import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "新叶喵",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "日光收集" },
			effect: { 'zh-cn': "选择自己牌库中最多2张基本能量，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Grass"],
			name: { 'zh-cn': "种子炸弹" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [906],
}

export default card
