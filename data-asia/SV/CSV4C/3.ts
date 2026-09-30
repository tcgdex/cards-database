import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "坐骑山羊"
	},
	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [673],
	hp: 130,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "顶起"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则追加造成30伤害。"
			},
			damage: "30+",
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'zh-cn': "日光束"
			},
			damage: "110",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
