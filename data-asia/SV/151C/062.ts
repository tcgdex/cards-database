import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蚊香泳士",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "蚊香君",
	},
	description: {
		'zh-cn': "除了游泳还擅长格斗技。能用经过锻炼的手臂使出豪迈强力的拳击。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "泡沫光线" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。" },
			damage: 50,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "豪爽拳" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成150伤害。" },
			damage: "100+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [62],
}

export default card
