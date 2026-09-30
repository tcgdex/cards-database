import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "音波龙ex"
	},
	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [715],
	hp: 260,
	types: ["Dragon"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "隐秘飞行"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，这只宝可梦不会受到【基础】宝可梦的招式的伤害。"
			},
			damage: "70",
		},
		{
			cost: ["Psychic", "Darkness"],
			name: {
				'zh-cn': "支配回响"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，对手无法从手牌使出并附着特殊能量，也无法放置竞技场。"
			},
			damage: "140",
		},
	],
	retreat: 0,
	regulationMark: "G",
}

export default card
