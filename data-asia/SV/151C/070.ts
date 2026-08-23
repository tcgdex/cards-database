import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "口呆花",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "喇叭芽",
	},
	description: {
		'zh-cn': "首先会吐出有毒的粉末，让对手停止行动后，会用溶解液解决对手。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "居合劈" },
			damage: 30,
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "汁液喷吐" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [70],
}

export default card
