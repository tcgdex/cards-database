import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "闪电鸟ex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "伏特飘浮" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了【雷】能量的话，则这只宝可梦【撤退】所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: { 'zh-cn': "闪电连弹" },
			effect: { 'zh-cn': "给身上放置有伤害指示物的对手的1只备战宝可梦，也造成90伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [145],
}

export default card
