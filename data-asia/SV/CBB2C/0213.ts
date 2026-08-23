import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水伊布V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "三重抽取" },
			effect: { 'zh-cn': "从自己的牌库上方抽取3张卡牌。" },
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: { 'zh-cn': "飞溅跳跃" },
			effect: { 'zh-cn': "将这只宝可梦与备战宝可梦互换。" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [134],
}

export default card
