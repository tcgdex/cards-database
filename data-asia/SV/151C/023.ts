import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "阿柏蛇",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	description: {
		'zh-cn': "它喜食鸟宝可梦的蛋。因为不咀嚼就整个吞下，所以有时会被噎住而昏倒。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness", "Darkness"],
			name: { 'zh-cn': "酸液炸弹" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则选择对手战斗宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [23],
}

export default card
