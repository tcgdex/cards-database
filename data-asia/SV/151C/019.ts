import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小拉达",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	description: {
		'zh-cn': "虽是常见的宝可梦，但也不能掉以轻心。锋利的门牙甚至连坚硬的木材都能轻易咬断。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "伤口啃咬" },
			effect: { 'zh-cn': "追加造成对手战斗宝可梦身上放置的伤害指示物数量×10伤害。" },
			damage: "20+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [19],
}

export default card
