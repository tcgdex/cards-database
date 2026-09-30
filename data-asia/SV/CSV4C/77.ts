import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "班基拉斯"
	},
	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [248],
	hp: 180,
	types: ["Darkness"],
	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'zh-cn': "踢散"
			},
			effect: {
				'zh-cn': "追加造成对手备战宝可梦数量×30伤害。"
			},
			damage: "30+",
		},
		{
			cost: ["Darkness", "Darkness"],
			name: {
				'zh-cn': "恐怖山岳"
			},
			effect: {
				'zh-cn': "将自己牌库上方4张卡牌放于弃牌区。"
			},
			damage: "230",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
