import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水箭龟ex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "卡咪龟",
	},
	stage: "Stage2",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "坚硬甲壳" },
			effect: { 'zh-cn': "这只宝可梦所受到的招式的伤害「-30」。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "双重加农炮" },
			effect: { 'zh-cn': "从自己手牌将最多2张「基本【水】能量」放于弃牌区，造成其张数×140伤害。" },
			damage: "140×",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [9],
}

export default card
