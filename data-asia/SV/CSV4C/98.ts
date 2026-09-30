import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "米立龙"
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [978],
	hp: 70,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "水枪"
			},
			damage: "20",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "生存战略"
			},
			effect: {
				'zh-cn': "选择自己牌库中任意卡牌最多2张，加入手牌。并重洗牌库。若希望，可将这只宝可梦与备战宝可梦互换。"
			},
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
