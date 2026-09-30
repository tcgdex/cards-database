import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "胆小虫"
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [767],
	hp: 70,
	types: ["Water"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "暗中偷吃"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则在不看对手手牌正面的前提下，选择其中1张放于弃牌区。"
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'zh-cn': "冲撞"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
