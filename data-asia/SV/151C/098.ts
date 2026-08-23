import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大钳蟹",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: {
		'zh-cn': "如果危险逼近，就会从嘴里吐出泡沫包裹全身，让身体看起来更大。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "引潮" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则选择自己牌库中最多2张「基本【水】能量」，附着于这只宝可梦身上。并重洗牌库。" },
		},
		{
			cost: ["Water", "Water", "Water"],
			name: { 'zh-cn': "蟹钳锤" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [98],
}

export default card
