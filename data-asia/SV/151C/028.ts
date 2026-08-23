import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "穿山王",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "穿山鼠",
	},
	description: {
		'zh-cn': "会将锐利的爪子钩在树上爬树。这是为了设法使树果掉落，分给等在树下的穿山鼠们。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "大地轰鸣" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "尖刺深挖" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦身上放置有伤害指示物的话，则追加造成100伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [28],
}

export default card
