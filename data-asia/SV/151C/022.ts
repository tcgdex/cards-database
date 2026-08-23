import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大嘴雀",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "烈雀",
	},
	description: {
		'zh-cn': "在阿罗拉，它的猎物是鱼宝可梦。能看到它盘旋在海上觅食的景象。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "鸟嘴捕捉" },
			effect: { 'zh-cn': "选择自己牌库中任意卡牌最多3张，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "高速飞行" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [22],
}

export default card
