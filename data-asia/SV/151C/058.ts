import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "卡蒂狗",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	description: {
		'zh-cn': "能毫无畏惧地去对抗比自己更强更大的对手。性格勇敢非常可靠。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "蒸发" },
			effect: { 'zh-cn': "选择对手战斗宝可梦身上附着的1个【水】能量，放于弃牌区。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [58],
}

export default card
