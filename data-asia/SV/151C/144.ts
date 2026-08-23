import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "急冻鸟",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	description: {
		'zh-cn': "拥有能够自由操纵冰的能力。据说它栖息在永久冻土的雪山。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "寒冰飘浮" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了【水】能量的话，则这只宝可梦【撤退】所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: { 'zh-cn': "暴风雪" },
			effect: { 'zh-cn': "给对手所有的备战宝可梦，也各造成10伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [144],
}

export default card
