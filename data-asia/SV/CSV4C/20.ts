import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "泳圈鼬"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [418],
	hp: 70,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "泼水"
			},
			damage: "10",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "鳍之利刃"
			},
			damage: "20",
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
