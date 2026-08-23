import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尼多娜",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "尼多兰",
	},
	description: {
		'zh-cn': "如果族群遇到了危险，会和伙伴们团结起来，施展出超音波大合唱。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "呼唤家人" },
			effect: { 'zh-cn': "选择自己牌库中最多3张宝可梦，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Darkness", "Colorless"],
			name: { 'zh-cn': "锐利之牙" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [30],
}

export default card
