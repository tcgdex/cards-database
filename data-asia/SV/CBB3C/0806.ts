import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "阿勃梭鲁",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "抽取感知" },
			effect: { 'zh-cn': "从牌库上方抽取卡牌，直到自己的手牌变为5张为止。若希望，在抽取卡牌前，可将任意数量的自己的手牌放于弃牌区。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "强化之刃" },
			effect: { 'zh-cn': "如果这只宝可梦身上放有「宝可梦道具」的话，则追加造成60伤害。" },
			damage: "20+",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [359],
}

export default card
