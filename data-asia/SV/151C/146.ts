import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火焰鸟",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	description: {
		'zh-cn': "相传它会用燃烧着的美丽翅膀照亮山道，救助在此遇险的人。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "闪焰飘浮" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了【火】能量的话，则这只宝可梦【撤退】所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],
			name: { 'zh-cn': "爆燃飞行" },
			effect: { 'zh-cn': "将这只宝可梦身上附着的2个【火】能量放于弃牌区，给对手的1只备战宝可梦，造成120伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [146],
}

export default card
