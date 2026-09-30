import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "大嘴娃"
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [303],
	hp: 90,
	types: ["Metal"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "特殊吞噬者"
			},
			effect: {
				'zh-cn': "在自己的回合，当将这张卡牌从手牌使出放于备战区时，可使用1次。选择对手战斗宝可梦身上附着的1个特殊能量，放于弃牌区。"
			},
		},
	],
	attacks: [
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'zh-cn': "锐利之牙"
			},
			damage: "90",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
