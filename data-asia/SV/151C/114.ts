import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蔓藤怪",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		'zh-cn': "藤蔓即使断了也能无限生长，里面的真面目是什么样子，直到今天也未被查明。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "紧束礼节" },
			effect: { 'zh-cn': "在这个回合，如果从手牌使出了「莉佳的邀请」的话，则追加造成60伤害。" },
			damage: "10+",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [114],
}

export default card
