import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "铁壳蛹",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "独角虫",
	},
	description: {
		'zh-cn': "为了不被天敌发现，会躲在叶子的背后或树枝的间隙中，等待进化时刻的到来。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "虫蛹防守" },
			effect: { 'zh-cn': "这只宝可梦，不受到对手宝可梦所使用招式的效果影响。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "刺痛" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Common",
	dexId: [14],
}

export default card
