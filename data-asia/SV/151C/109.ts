import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "瓦斯弹",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	description: {
		'zh-cn': "身体里充满了毒气。会为了寻求湿垃圾腐烂的气味而来到垃圾场。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "奇异瓦斯" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [109],
}

export default card
