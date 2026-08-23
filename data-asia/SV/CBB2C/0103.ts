import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "伊布",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "伊布搜索" },
			effect: { 'zh-cn': "选择自己牌库中最多3张「宝可梦【V】」，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "踩" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [133],
}

export default card
