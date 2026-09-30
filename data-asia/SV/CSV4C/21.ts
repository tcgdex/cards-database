import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "浮潜鼬"
	},
	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [419],
	hp: 120,
	types: ["Water"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "水炮"
			},
			effect: {
				'zh-cn': "追加造成这只宝可梦身上附着的【水】能量数量×20伤害。"
			},
			damage: "50+",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
