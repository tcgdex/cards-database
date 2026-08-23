import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "烈焰猴",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "猛火猴",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "火焰武斗" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。选择自己手牌中的「基本【火】能量」和「基本【斗】能量」各最多1张，以任意方式附着于自己宝可梦身上。" },
		},
	],
	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "燃烧驱逐" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 200,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [392],
}

export default card
