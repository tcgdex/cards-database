import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "菊石兽",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "谜之化石",
	},
	description: {
		'zh-cn': "已经灭绝的古代宝可梦。依靠１０只脚来划水，在水中轻盈地游曳。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "触手返还" },
			effect: { 'zh-cn': "选择对手战斗宝可梦身上附着的1个能量，放回对手的手牌。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [138],
}

export default card
