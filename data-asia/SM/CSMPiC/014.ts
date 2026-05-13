import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尖牙陆鲨",
	},
	rarity: "None",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [444],
	hp: 80,
	types: ["Dragon"],
	evolveFrom: {
		'zh-cn': "圆陆鲨",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "升阶",
			},
			effect: {
				'zh-cn': "从自己的牌库选择1张由这只宝可梦进化而来的卡，放置于这只宝可梦身上完成进化。并且重洗牌库。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "劈开",
			},
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2",
		},
	],
	retreat: 1,
	variants: [{ type: "holo" }],
}

export default card
