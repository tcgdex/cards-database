import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "肯泰罗",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	description: {
		'zh-cn': "锁定猎物之后，就会一边用尾巴抽打身体一边笔直地冲向对手。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "集群" },
			effect: { 'zh-cn': "选择自己牌库中的1张【基础】宝可梦，放于备战区。并重洗牌库。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "愤怒" },
			effect: { 'zh-cn': "追加造成这只宝可梦身上放置的伤害指示物数量×10伤害。" },
			damage: "30+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [128],
}

export default card
