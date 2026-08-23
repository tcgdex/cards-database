import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "伊布",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	description: {
		'zh-cn': "为了能立刻适应环境的变化，这种宝可梦蕴含着多种进化的可能性。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "多彩亲友" },
			effect: { 'zh-cn': "选择自己牌库中，属性各不相同的宝可梦最多3张，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "跳接" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [133],
}

export default card
