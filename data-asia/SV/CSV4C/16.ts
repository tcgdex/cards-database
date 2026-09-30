import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "炎帝"
	},
	illustrator: "toriyufu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [244],
	hp: 130,
	types: ["Fire"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "压迫感"
			},
			effect: {
				'zh-cn': "只要这只宝可梦在战斗场上，对手战斗宝可梦使用的招式的伤害「-20」。"
			},
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "火焰之球"
			},
			effect: {
				'zh-cn': "追加造成这只宝可梦身上附着的【火】能量数量×20伤害。"
			},
			damage: "60+",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
