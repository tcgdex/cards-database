import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "伊布",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "共鸣进化" },
			effect: { 'zh-cn': "在自己的回合，如果从手牌使出宝可梦使自己的其他「伊布」进行进化了的话，则可使用1次。从自己的牌库中选择1张从这只宝可梦进化而来的卡牌，放于这只宝可梦身上进行进化。并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "撞击" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [133],
}

export default card
