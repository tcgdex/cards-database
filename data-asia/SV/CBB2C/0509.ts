import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "太阳伊布",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "吸引" },
			effect: { 'zh-cn': "从自己的牌库上方抽取3张卡牌。" },
		},
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "能量粉碎" },
			effect: { 'zh-cn': "追加造成对手场上宝可梦身上附有的能量数量×20点伤害。" },
			damage: "20+",
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 1,
	regulationMark: "B",
	rarity: "Rare",
	dexId: [196],
}

export default card
