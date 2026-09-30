import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "海地鼠"
	},
	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [960],
	hp: 60,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "泼水"
			},
			damage: "10",
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
