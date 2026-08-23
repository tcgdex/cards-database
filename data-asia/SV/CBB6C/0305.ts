import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蛋蛋",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "早熟进化" },
			effect: { 'zh-cn': "这个招式，即使是先攻玩家的最初回合也可以使用。选择自己牌库中1张，从这只宝可梦进化而来的卡牌，放于这只宝可梦身上进行进化。并重洗牌库。" },
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [102],
}

export default card
