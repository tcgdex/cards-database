import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "波普海豚"
	},
	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [963],
	hp: 50,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "勇气进化"
			},
			effect: {
				'zh-cn': "将这只宝可梦与备战宝可梦互换。然后，从自己牌库中选择1张从这只宝可梦进化而来的卡牌，放于这只宝可梦身上进行进化。并重洗牌库。"
			},
		},
		{
			cost: ["Water"],
			name: {
				'zh-cn': "鳍之利刃"
			},
			damage: "10",
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
