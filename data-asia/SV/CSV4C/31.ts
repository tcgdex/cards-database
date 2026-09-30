import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "轻身鳕"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [976],
	hp: 130,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "冲撞"
			},
			damage: "20",
		},
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "轻盈螺旋"
			},
			effect: {
				'zh-cn': "这个招式，如果自己没有手牌的话，则仅需1个【水】能量便可使用。"
			},
			damage: "120",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
