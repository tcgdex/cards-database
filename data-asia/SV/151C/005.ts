import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火恐龙",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "小火龙",
	},
	description: {
		'zh-cn': "如果它在战斗中亢奋起来，就会喷出灼热的火焰，把周围的东西烧得一干二净。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "烈焰" },
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: { 'zh-cn': "大字爆炎" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [5],
}

export default card
