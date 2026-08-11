import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷电云GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [642],
	hp: 180,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "GX",
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "充电",
			},
			effect: {
				'zh-cn': "从自己的牌库选择1张雷能量卡，附于这只宝可梦身上。并且重洗牌库。",
			},
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'zh-cn': "电光球",
			},
			damage: 140,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'zh-cn': "雷电飓风GX",
			},
			effect: {
				'zh-cn': "掷4次硬币，造成正面出现的次数×100点伤害。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: "100×",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
