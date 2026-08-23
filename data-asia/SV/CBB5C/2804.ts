import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "米立龙",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "揽客" },
			effect: { 'zh-cn': "如果这只宝可梦在战斗场上的话，则在自己的回合可以使用1次。查看自己牌库上方6张卡牌，选择其中1张支援者，在给对手看过之后，加入手牌。将剩余的卡牌放回牌库并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Fire", "Water"],
			name: { 'zh-cn': "冲浪" },
			damage: 50,
		},
	],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [978],
}

export default card
