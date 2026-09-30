import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "冻原熊"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [614],
	hp: 150,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "冰柱重拳"
			},
			damage: "30",
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				'zh-cn': "冰霜净化"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为反面，则将这只宝可梦身上附着的能量，全部放于弃牌区。"
			},
			damage: "170",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
