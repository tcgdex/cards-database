import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "腕力",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	description: {
		'zh-cn': "时时刻刻都充满力量。由于体力过剩而去举起岩石消磨时间，也因此变得更强。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "敲山" },
			effect: { 'zh-cn': "将对手牌库上方的1张卡牌放于弃牌区。" },
		},
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "重拳" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [66],
}

export default card
