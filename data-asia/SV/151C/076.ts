import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "隆隆岩ex",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "隆隆石",
	},
	stage: "Stage2",
	suffix: "ex",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "强劲滚动" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦所使用的招式，给对手战斗宝可梦造成的伤害「+120」。" },
			damage: 50,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "岩石冲撞" },
			effect: { 'zh-cn': "这个招式的伤害不计算抗性。" },
			damage: 180,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [76],
}

export default card
