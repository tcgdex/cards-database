import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "七夕青鸟"
	},
	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [334],
	hp: 120,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "滑翔"
			},
			damage: "30",
		},
		{
			cost: ["Water", "Metal"],
			name: {
				'zh-cn': "熟睡歌声"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【睡眠】状态。因这个【睡眠】而抛掷的硬币次数变为2次，只要不是全为正面就不会恢复。"
			},
			damage: "110",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
