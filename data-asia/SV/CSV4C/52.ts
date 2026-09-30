import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "太阳岩"
	},
	illustrator: "Tetsu Kayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [338],
	hp: 90,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "呼朋引伴"
			},
			effect: {
				'zh-cn': "选择自己牌库中最多2张【基础】宝可梦，放于备战区。并重洗牌库。"
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "日光束"
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
