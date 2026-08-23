import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "达克莱伊",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "黑色微寐" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【睡眠】状态。" },
			damage: 20,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "暗夜旋风" },
			effect: { 'zh-cn': "将这只宝可梦身上附着的所有能量，以任意方式转附于备战宝可梦身上。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [491],
}

export default card
