import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "椰蛋树",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "蛋蛋",
	},
	description: {
		'zh-cn': "３个脑袋联合起来能使出强大的精神力量。天气变阴时动作会变得迟钝。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "精神强念" },
			effect: { 'zh-cn': "追加造成对手战斗宝可梦身上附着的能量数量×30伤害。" },
			damage: "30+",
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { 'zh-cn': "头突" },
			damage: 130,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [103],
}

export default card
