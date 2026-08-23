import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "好胜毛蟹",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "好胜蟹",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "准备工作" },
			effect: { 'zh-cn': "这只宝可梦使用招式所需能量会减少与自己弃牌区中的「海岱」张数相同数量的【无】能量。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "大幅挥拳" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用「大幅挥拳」。" },
			damage: 250,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [740],
}

export default card
