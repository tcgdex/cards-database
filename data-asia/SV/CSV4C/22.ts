import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "喷嚏熊"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [613],
	hp: 70,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "踢飞"
			},
			damage: "10",
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'zh-cn': "打滚"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则追加造成20伤害。"
			},
			damage: "20+",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
