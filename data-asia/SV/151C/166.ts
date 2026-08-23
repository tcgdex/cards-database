import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "海星星",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		'zh-cn': "虽然会遭到鱼宝可梦的啄食，但身体即使被咬掉一块也能马上再生，所以完全不在意。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "高速星星" },
			effect: { 'zh-cn': "这个招式的伤害，不计算弱点、抗性以及对手战斗宝可梦身上所附加的效果。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [120],
}

export default card
