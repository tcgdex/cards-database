import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "莫鲁贝可",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "空腹冲刺" },
			effect: { 'zh-cn': "如果这只宝可梦身上没有附着任何能量的话，则这只宝可梦【撤退】所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Darkness", "Darkness"],
			name: { 'zh-cn': "能量车轮" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的2个【恶】能量，转附于1只备战宝可梦身上。" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [877],
}

export default card
