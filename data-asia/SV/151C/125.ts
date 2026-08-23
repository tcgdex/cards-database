import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "电击兽",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	description: {
		'zh-cn': "暴风雨来临时，它们就会集结在高高的大树周围，耐心地等待落雷。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "电气组合技" },
			effect: { 'zh-cn': "如果自己的备战区有「鸭嘴火兽」的话，则追加造成40伤害。" },
			damage: "10+",
		},
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "殴打" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [125],
}

export default card
