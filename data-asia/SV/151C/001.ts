import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "妙蛙种子",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	description: {
		'zh-cn': "在出生后的一段时间内，它会吸收背上种子里储存着的营养成长。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "寄生种子" },
			effect: { 'zh-cn': "回复这只宝可梦「20」HP。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [1],
}

export default card
