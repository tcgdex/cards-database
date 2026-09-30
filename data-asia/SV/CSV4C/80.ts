import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "下石鸟"
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [962],
	hp: 120,
	types: ["Darkness"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "搬运口袋"
			},
			effect: {
				'zh-cn': "选择自己牌库中的1张【基础】宝可梦，放于备战区。并重洗牌库。"
			},
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				'zh-cn': "暗黑锋刃"
			},
			effect: {
				'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。"
			},
			damage: "120",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
