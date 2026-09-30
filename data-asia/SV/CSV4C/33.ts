import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "电音婴"
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [848],
	hp: 70,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "小小莽撞"
			},
			effect: {
				'zh-cn': "给这只宝可梦也造成10伤害。"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
