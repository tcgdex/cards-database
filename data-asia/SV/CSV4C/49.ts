import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "布鲁"
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [209],
	hp: 80,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "啃咬"
			},
			damage: "10",
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "舍身冲撞"
			},
			effect: {
				'zh-cn': "给这只宝可梦也造成10伤害。"
			},
			damage: "30",
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
