import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "盐石巨灵ex"
	},
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [934],
	hp: 340,
	types: ["Fighting"],
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "岩盐之躯"
			},
			effect: {
				'zh-cn': "这只宝可梦不会陷入特殊状态。"
			},
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'zh-cn': "格挡之锤"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-60」。"
			},
			damage: "170",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",
}

export default card
