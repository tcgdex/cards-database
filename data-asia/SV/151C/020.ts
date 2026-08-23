import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "拉达",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "小拉达",
	},
	description: {
		'zh-cn': "胡须是用来保持平衡的重要器官。即使感情再好，只要摸了它的胡须，它就会发火咬你。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "咬住伤口" },
			effect: { 'zh-cn': "追加造成对手战斗宝可梦身上放置的伤害指示物数量×30伤害。" },
			damage: "30+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [20],
}

export default card
