import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "布鲁皇"
	},
	illustrator: "Lee HyunJung",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [210],
	hp: 130,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "正面对决"
			},
			damage: "50",
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'zh-cn': "疯狂冲撞"
			},
			effect: {
				'zh-cn': "给这只宝可梦也造成30伤害。"
			},
			damage: "160",
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
