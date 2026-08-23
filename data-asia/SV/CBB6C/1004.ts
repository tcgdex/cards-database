import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "飘浮泡泡 太阳的样子",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "致焦" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【灼伤】状态。" },
		},
		{
			cost: ["Fire", "Colorless"],
			name: { 'zh-cn': "阳光辅助" },
			effect: { 'zh-cn': "将这只宝可梦身上附着的所有能量，转附于1只备战宝可梦身上。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [351],
}

export default card
