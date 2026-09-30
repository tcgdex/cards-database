import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "飞天螳螂"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [123],
	hp: 80,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "高速移动"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害和效果影响。"
			},
			damage: "10",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "居合劈"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
