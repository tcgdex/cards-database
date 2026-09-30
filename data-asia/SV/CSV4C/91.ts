import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "哈克龙"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [148],
	hp: 100,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "冲撞"
			},
			damage: "30",
		},
		{
			cost: ["Water", "Lightning"],
			name: {
				'zh-cn': "龙尾"
			},
			effect: {
				'zh-cn': "抛掷2次硬币，造成正面次数×70伤害。"
			},
			damage: "70×",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
