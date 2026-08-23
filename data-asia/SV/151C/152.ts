import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小火龙",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	description: {
		'zh-cn': "生下来的时候，尾巴上就有火焰在燃烧。火焰熄灭时，它的生命也会结束。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "烧光" },
			effect: { 'zh-cn': "将场上的竞技场放于弃牌区。" },
		},
		{
			cost: ["Fire", "Fire"],
			name: { 'zh-cn': "吐火" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [4],
}

export default card
