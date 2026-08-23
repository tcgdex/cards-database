import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "安瓢虫",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "芭瓢虫",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "烁星花纹" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。选择对手备战区中的1只剩余HP在「90」及以下的宝可梦，将其与战斗宝可梦互换。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "高速星星" },
			effect: { 'zh-cn': "这个招式的伤害，不计算弱点、抗性以及对手战斗宝可梦身上所附加的效果。" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 0,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [166],
}

export default card
