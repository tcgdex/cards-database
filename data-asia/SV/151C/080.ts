import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "呆壳兽",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "呆呆兽",
	},
	description: {
		'zh-cn': "呆呆兽去海里捕食时，由于被大舌贝咬住尾巴而变成了呆壳兽。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "大哈欠" },
			effect: { 'zh-cn': "令双方的战斗宝可梦，各陷入【睡眠】状态。" },
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "悠闲冲撞" },
			effect: { 'zh-cn': "在这个回合，如果这只宝可梦刚完成进化的话，则这个招式失败。" },
			damage: 160,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [80],
}

export default card
