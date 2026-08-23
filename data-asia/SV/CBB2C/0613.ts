import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "月亮伊布V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "黑色目光" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 30,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: { 'zh-cn': "月光之刃" },
			effect: { 'zh-cn': "如果这只宝可梦身上放置有伤害指示物的话，则追加造成80点伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [197],
}

export default card
