import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "独角犀牛",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	description: {
		'zh-cn': "脑子里只能记住一件事。一旦开始猛冲，不管理由是什么都会很快感到无所谓而忘掉。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "撞飞" },
			effect: { 'zh-cn': "将对手的战斗宝可梦与备战宝可梦互换。[放于战斗场的宝可梦由对手选择。]" },
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: { 'zh-cn': "岩石粉碎" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Common",
	dexId: [111],
}

export default card
