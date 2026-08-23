import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "磨牙彩皮鱼",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
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
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "啃住" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [779],
}

export default card
