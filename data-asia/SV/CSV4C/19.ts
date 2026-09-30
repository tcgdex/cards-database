import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "炭小侍"
	},
	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [935],
	hp: 60,
	types: ["Fire"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "守住"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不会受到招式的伤害和效果影响。"
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'zh-cn': "熔岩拳"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
