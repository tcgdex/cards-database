import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "鸭嘴火兽",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	description: {
		'zh-cn': "全身时刻都在燃烧。大家认为它是引发火灾的原因之一，非常惧怕它。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "火种" },
			damage: 10,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "闪焰组合技" },
			effect: { 'zh-cn': "如果自己的备战区有「电击兽」的话，则追加造成80伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [126],
}

export default card
