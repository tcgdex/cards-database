import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "托戈德玛尔"
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [777],
	hp: 80,
	types: ["Metal"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "变圆"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害。"
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				'zh-cn': "滚动冲撞"
			},
			damage: "50",
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
