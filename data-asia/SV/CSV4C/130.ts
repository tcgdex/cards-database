import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "纳噬草"
	},
	illustrator: "sowsow",
	rarity: "Illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [946],
	hp: 50,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "小口吸取"
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
