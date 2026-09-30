import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "沙基拉斯"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [247],
	hp: 90,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "鲁莽头击"
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
