import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "卡比兽",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	description: {
		'zh-cn': "拥有一个结实的胃，即使吃了发霉腐烂的东西，也完全不会吃坏肚子。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "贪嘴" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。选择自己弃牌区中最多2张「吃剩的东西」，在给对手看过之后，加入手牌。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "厚重压制" },
			effect: { 'zh-cn': "给这只宝可梦也造成30伤害。" },
			damage: 130,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [143],
}

export default card
