import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "呆呆兽",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	description: {
		'zh-cn': "动作迟缓又呆头呆脑。就算挨打也要过５秒才能感受到疼痛。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "海水浴" },
			effect: { 'zh-cn': "回复这只宝可梦「30」HP，并恢复其所有特殊状态。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "头锤" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [79],
}

export default card
