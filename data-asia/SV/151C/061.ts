import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蚊香君",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "蚊香蝌蚪",
	},
	description: {
		'zh-cn': "流出的汗是黏滑的粘液状。即使被敌人捉住，也能哧溜一下滑走逃脱。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "飞溅" },
			damage: 20,
		},
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "蛙跳" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成60伤害。" },
			damage: "30+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [61],
}

export default card
