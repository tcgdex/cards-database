import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "人造细胞卵",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "双卵细胞球",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "召唤之门" },
			effect: { 'zh-cn': "查看自己牌库上方8张卡牌，选择其中任意数量的宝可梦，放于备战区。将剩余的卡牌放回牌库并重洗牌库。" },
		},
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "脑力震撼" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [579],
}

export default card
