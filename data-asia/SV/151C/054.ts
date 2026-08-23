import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "可达鸭",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: {
		'zh-cn': "一直受到头痛的困扰。在头痛欲裂时，就会开始使用神奇的力量。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "胡思乱想" },
			effect: { 'zh-cn': "在下一个对手的回合，将对手抛掷的硬币的结果，全部视作反面。" },
		},
		{
			cost: ["Water"],
			name: { 'zh-cn': "水枪" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [54],
}

export default card
