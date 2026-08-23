import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "刺甲贝",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "大舌贝",
	},
	description: {
		'zh-cn': "刺甲贝栖息在激流涌动的海里，它壳上的刺又大又尖锐。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "防卫充能" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-80」。" },
			damage: 80,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [91],
}

export default card
