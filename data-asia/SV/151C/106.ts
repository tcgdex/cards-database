import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "飞腿郎",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	description: {
		'zh-cn': "腿能自由地伸缩，即使离得很远，也能把对手踢飞。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "龙卷风踢腿" },
			effect: { 'zh-cn': "给对手所有的宝可梦，各造成10伤害。将这只宝可梦与备战宝可梦互换。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: { 'zh-cn': "踢倒" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [106],
}

export default card
