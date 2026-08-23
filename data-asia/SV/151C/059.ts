import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "风速狗",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "卡蒂狗",
	},
	description: {
		'zh-cn': "根据过去的画卷记载，它在草原上奔驰的姿态俘虏了众多人心。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "灼热沸腾" },
			effect: { 'zh-cn': "选择自己弃牌区中最多2张「基本【火】能量」，附着于这只宝可梦身上。" },
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "裂爆獠牙" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的2个【火】能量，放于弃牌区。" },
			damage: 240,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [59],
}

export default card
