import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "布土拨"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [922],
	hp: 80,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "劈啪作响"
			},
			damage: "20",
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'zh-cn': "电气子弹"
			},
			effect: {
				'zh-cn': "给对手的1只备战宝可梦，也造成30伤害。[备战宝可梦不计算弱点、抗性。]"
			},
			damage: "50",
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
