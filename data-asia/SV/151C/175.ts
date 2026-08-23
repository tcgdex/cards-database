import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "喷火龙ex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "火恐龙",
	},
	stage: "Stage2",
	suffix: "ex",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "英勇之翼" },
			effect: { 'zh-cn': "如果这只宝可梦身上放置有伤害指示物的话，则追加造成100伤害。" },
			damage: "60+",
		},
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: { 'zh-cn': "爆炎漩涡" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的3个能量，放于弃牌区。" },
			damage: 330,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [6],
}

export default card
