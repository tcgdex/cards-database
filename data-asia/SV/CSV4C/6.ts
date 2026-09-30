import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "迷你芙"
	},
	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [928],
	hp: 50,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "吸取"
			},
			effect: {
				'zh-cn': "回复这只宝可梦「10」HP。"
			},
			damage: "10",
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
