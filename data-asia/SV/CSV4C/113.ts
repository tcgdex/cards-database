import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "一家鼠"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [925],
	hp: 60,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "重掴"
			},
			damage: "50",
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "乱啃"
			},
			effect: {
				'zh-cn': "将与自己场上「一家鼠」数量相同数量的伤害指示物，各放置于对手的所有宝可梦身上。"
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
