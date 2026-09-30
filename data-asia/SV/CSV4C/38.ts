import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "巴布土拨"
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [923],
	hp: 140,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "音速伏特"
			},
			damage: "40",
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'zh-cn': "电气拳"
			},
			effect: {
				'zh-cn': "给对手的1只备战宝可梦，也造成60伤害。[备战宝可梦不计算弱点、抗性。]"
			},
			damage: "100",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
