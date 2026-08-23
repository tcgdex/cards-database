import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "顽皮雷弹",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "霹雳电球",
	},
	description: {
		'zh-cn': "虽然存储的电能越多就越是能够高速移动，但同时也会更容易爆炸。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "雷弹连锁" },
			effect: { 'zh-cn': "在造成伤害前，将任意数量的放于自己场上宝可梦身上的「宝可梦道具」放于弃牌区，追加造成其张数×40伤害。" },
			damage: "20+",
		},
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "电球" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [101],
}

export default card
