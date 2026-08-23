import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "彩粉蝶",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "粉蝶蛹",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "进化粉末" },
			effect: { 'zh-cn': "选择自己牌库中从自己所有备战宝可梦进化而来的卡牌各1张，分别放于各只宝可梦身上进行进化。并重洗牌库。" },
		},
		{
			cost: ["Grass"],
			name: { 'zh-cn': "利刃之风" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [666],
}

export default card
