import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "咚咚鼠"
	},
	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [702],
	hp: 70,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "小使者"
			},
			effect: {
				'zh-cn': "选择自己牌库中最多2张基本能量，在给对手看过之后，加入手牌。并重洗牌库。"
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "旋转折返"
			},
			effect: {
				'zh-cn': "将这只宝可梦与备战宝可梦互换。"
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
