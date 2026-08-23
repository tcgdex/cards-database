import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尼多兰",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	description: {
		'zh-cn': "用坚硬的门牙咬碎树果吃。和雄性相比，角的尖端稍圆一些。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: { 'zh-cn': "毒角" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【中毒】状态。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [29],
}

export default card
