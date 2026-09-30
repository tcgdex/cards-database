import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "伊布"
	},
	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [133],
	hp: 70,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "应援"
			},
			effect: {
				'zh-cn': "选择自己手牌中的1张能量，附着于自己的宝可梦身上。"
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "重踢"
			},
			damage: "20",
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
