import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "差不多娃娃"
	},
	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [531],
	hp: 100,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "找朋友"
			},
			effect: {
				'zh-cn': "选择自己牌库中的1张宝可梦，在给对手看过之后，加入手牌。并重洗牌库。"
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "巴掌"
			},
			damage: "80",
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
