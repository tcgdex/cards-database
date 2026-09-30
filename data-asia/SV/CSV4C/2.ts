import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "坐骑小羊"
	},
	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [672],
	hp: 60,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "藤鞭"
			},
			damage: "10",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "踢飞"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
