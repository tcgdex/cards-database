import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "六尾",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	description: {
		'zh-cn': "随着身体的成长，６根尾巴的毛发也会变得更漂亮。紧紧抱着它时能感到微微的温暖。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: { 'zh-cn': "火焰灼烧" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【灼伤】状态。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [37],
}

export default card
