import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尼多王",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "尼多力诺",
	},
	description: {
		'zh-cn': "以力量为傲的宝可梦。用自己的粗尾巴和连钻石都能击碎的角，豪爽地战斗。",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "活力王者" },
			effect: { 'zh-cn': "如果自己的场上有「尼多后」的话，则这只宝可梦的使用招式所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			name: { 'zh-cn': "毒素冲击" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【中毒】状态。" },
			damage: 190,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [34],
}

export default card
