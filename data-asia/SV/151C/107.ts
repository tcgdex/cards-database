import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "快拳郎",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	description: {
		'zh-cn': "打出的拳击甚至能劈开空气。但攻击３分钟后，它似乎就会想休息一下。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "反击" },
			effect: { 'zh-cn': "当这只宝可梦，在战斗场上受到对手宝可梦的招式的伤害时，将3个伤害指示物放置于使用了招式的宝可梦身上。" },
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "振奋拳" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦使用的「振奋拳」的伤害「+60」。" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [107],
}

export default card
