import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "钻角犀兽",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "独角犀牛",
	},
	description: {
		'zh-cn': "全身被铠甲般的皮肤保护着。甚至能在２０００度的熔岩里生存。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "摔碎" },
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: { 'zh-cn': "领导力冲钻" },
			effect: { 'zh-cn': "在这个回合，如果从手牌使出了「坂木的领导力」的话，则追加造成140伤害。" },
			damage: "40+",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [112],
}

export default card
