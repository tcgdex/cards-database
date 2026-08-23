import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "烈焰马",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "小火马",
	},
	description: {
		'zh-cn': "奔跑速度最快的烈焰马会成为首领，决定族群前往的地点和奔跑速度。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "致焦" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【灼伤】状态。" },
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "音速折返" },
			effect: { 'zh-cn': "将这只宝可梦与备战宝可梦互换。" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [78],
}

export default card
