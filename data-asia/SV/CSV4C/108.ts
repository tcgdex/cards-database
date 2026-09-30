import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "长毛狗"
	},
	illustrator: "Keisin",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [508],
	hp: 160,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "咬咬恐慌"
			},
			effect: {
				'zh-cn': "造成对手战斗宝可梦【撤退】所需能量数量×50伤害。"
			},
			damage: "50×",
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "锐利之牙"
			},
			damage: "140",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
