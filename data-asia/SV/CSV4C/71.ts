import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "列阵兵"
	},
	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [870],
	hp: 110,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "头锤"
			},
			damage: "20",
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'zh-cn': "一同突击"
			},
			effect: {
				'zh-cn': "如果自己的备战区有「列阵兵」的话，则追加造成90伤害。"
			},
			damage: "70+",
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
