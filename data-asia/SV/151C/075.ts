import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "隆隆石",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "小拳石",
	},
	description: {
		'zh-cn': "会从悬崖上滚下来移动。如果不慎落入河里，就会来个大爆炸以作最后挣扎。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "连续岩石抛掷" },
			effect: { 'zh-cn': "抛掷硬币直到出现反面，造成正面次数×40伤害。" },
			damage: "40×",
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "重磅冲击" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [75],
}

export default card
