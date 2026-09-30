import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "九尾"
	},
	illustrator: "Yoshioka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [38],
	hp: 120,
	types: ["Fire"],
	attacks: [
		{
			cost: ["Fire"],
			name: {
				'zh-cn': "磷火"
			},
			damage: "20",
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				'zh-cn': "九尾之舞"
			},
			effect: {
				'zh-cn': "给对手的1只宝可梦身上，放置9个伤害指示物。在下一个自己的回合，这只宝可梦无法使用招式。"
			},
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
