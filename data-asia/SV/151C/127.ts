import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "凯罗斯",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	description: {
		'zh-cn': "用角夹住猎物后，不是直接把对方切成两半，就是强行把对方扔飞。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "夹住" },
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { 'zh-cn': "蛮干抛掷" },
			effect: { 'zh-cn': "如果自己的剩余奖赏卡张数，比对手的剩余奖赏卡张数多的话，则追加造成90伤害。" },
			damage: "90+",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [127],
}

export default card
