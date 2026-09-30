import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "波克基斯"
	},
	illustrator: "Cona Nitanda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [468],
	hp: 150,
	types: ["Psychic"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "珍贵礼物"
			},
			effect: {
				'zh-cn': "在自己的回合结束时可以使用1次。从牌库上方抽取卡牌，直到自己的手牌变为8张为止。"
			},
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "力量旋风"
			},
			effect: {
				'zh-cn': "选择这只宝可梦身上附着的1个能量，转附于备战宝可梦身上。"
			},
			damage: "110",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
}

export default card
