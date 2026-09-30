import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "摩托蜥"
	},
	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [967],
	hp: 120,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Grass", "Darkness", "Colorless"],
			name: {
				'zh-cn': "高速驾驶"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害和效果影响。"
			},
			damage: "100",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
