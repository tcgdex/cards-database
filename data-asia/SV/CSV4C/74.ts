import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "盐石巨灵"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [934],
	hp: 180,
	types: ["Fighting"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "恩惠之盐"
			},
			effect: {
				'zh-cn': "只要这只宝可梦在场上，每当宝可梦检查时，自己所有宝可梦的HP，各回复「20」。"
			},
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'zh-cn': "敲打重锤"
			},
			effect: {
				'zh-cn': "将对手牌库上方1张卡牌放于弃牌区。"
			},
			damage: "130",
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
