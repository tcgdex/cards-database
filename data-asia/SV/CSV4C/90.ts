import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "迷你龙"
	},
	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [147],
	hp: 70,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "尾鞭"
			},
			damage: "20",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
