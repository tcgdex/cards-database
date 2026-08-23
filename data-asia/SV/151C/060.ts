import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蚊香蝌蚪",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		'zh-cn': "在水流湍急的河里，会把厚厚的嘴唇像吸盘那样紧紧吸在岩石上避免被冲走。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "泡沫" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [60],
}

export default card
